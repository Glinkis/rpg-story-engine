import { randomFloat } from "../rolls"
import { Town } from "../town/town"
import { NPC } from "./npc"
import { professions } from "./professions"

/**
 * This gets the starting profession.
 */
export function fetchProfessionChance(town: Town, npc: NPC) {
  const populations = Object.values(town.professions)

  const sum = npc.socialClass
    ? populations.filter(profession => professions[profession].socialClass === npc.socialClass)
    : populations

  const totalWeight = sum.reduce((total, value) => total + value)

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
