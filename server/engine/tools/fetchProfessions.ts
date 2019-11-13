import { dice, randomFloatRange } from "../rolls"
import { professions } from "../npc-generation/professions"
import { Town } from "../town/town"

/**
 * This is run on start up.
 * It returns the available town professions, with their support values.
 *
 * Individual professions are returned by the `fetchProfessionChance()`
 * function located in `NPCGeneration/fetchProfessionChance.js`
 */
export function fetchProfessions(town: Town) {
  const result: Record<string, any> = {}

  for (const [name, profession] of Object.entries(professions)) {
    const newSv = profession.sv + (dice(4, 4) - 10) * 10

    /*
     * Set the number of professions equal = the town's population
     * divided by how many people are needed = support that type of * business
     */

    const professionRoll = town.population / newSv
    const professionRollPercentage = (town.population / profession.sv) * 100
    const professionRollHundred = randomFloatRange(1, 100)

    let professionCount: number
    if (professionRoll < 1 && professionRollPercentage >= professionRollHundred) {
      professionCount = 1
    } else if (professionRoll < 1 && professionRollPercentage < professionRollHundred) {
      professionCount = 0
    } else {
      professionCount = Math.trunc(professionRoll)
    }

    if (professionCount >= 1) {
      result[name] = professionCount
    }
  }

  return result
}
