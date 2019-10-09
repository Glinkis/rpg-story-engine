import { townData } from "../town/townData"
import { dice, randomFloatRange } from "../rolls"

/**
 * This is run on start up.
 * It returns the available town professions, with their support values.
 *
 * Individual professions are returned by the `fetchProfessionChance()`
 * function located in `NPCGeneration/fetchProfessionChance.js`
 */
export function fetchProfessions(town?: any) {
  town = town //|| State.variables.town
  town.professions = {}

  for (const [name, profession] of Object.entries(townData.professions)) {
    const townPop = town.population
    const newSv = profession.sv + (dice(4, 4) - 10) * 10
    /* Set the number of professions equal = the town's population divided by how many people are needed = support that type of business */
    const professionRoll = townPop / newSv
    const professionRollPercentage = (townPop / profession.sv) * 100
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
      profession.population = professionCount
      profession.name = name
      town.professions[name] = profession
    }
  }

  return town.professions
}
