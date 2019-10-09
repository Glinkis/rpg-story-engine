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
  const professionNames = Object.keys(townData.professions)
  const professions = professionNames.map(profession => townData.professions[profession])
  for (const profession of professions) {
    const townPop = town.population
    const newSv = profession.sv + (dice(4, 4) - 10) * 10
    /* Set the number of professions equal = the town's population divided by how many people are needed = support that type of business */
    const professionRoll = townPop / newSv
    const professionRollPercentage = (townPop / profession.sv) * 100
    const professionRollHundred = randomFloatRange(1, 100)
    // eslint-disable-next-line no-var
    var professionCount
    if (professionRoll < 1 && professionRollPercentage >= professionRollHundred) {
      professionCount = 1
    } else if (professionRoll < 1 && professionRollPercentage < professionRollHundred) {
      professionCount = 0
    } else {
      /* Truncate the number = a whole number */
      professionCount = Math.trunc(professionRoll)
    }

    if (professionCount >= 1) {
      profession.population = professionCount
      const name = professions.indexOf(profession)
      profession.name = professionNames[name]
      town.professions[profession.name] = profession
    }
  }
  console.log(town.professions)
  return town.professions
}
