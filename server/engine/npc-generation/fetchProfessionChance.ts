import { randomFloat } from "../rolls"
import { Town } from "../town/town"

// This gets the starting profession.
export function fetchProfessionChance(town: Town, npc: any) {
  // TODO: town = town || State.variables.town
  let professions = Object.keys(town.professions)

  if (npc.socialClass) {
    professions = professions.filter(profession => town.professions[profession].socialClass === npc.socialClass)
  }

  const sum = professions.map(profession => town.professions[profession].population)

  let totalWeight = 0
  for (const single of sum) {
    totalWeight += single
  }

  let random = Math.floor(randomFloat(1) * totalWeight)
  let index = 0

  for (let i = 0; i < sum.length; i++) {
    random -= sum[i]
    if (random < 0) {
      index = i
      break
    }
  }

  return professions[index]
}
