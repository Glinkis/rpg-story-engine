import { randomFloat } from "../rolls"
import { Town } from "../town/town"
import { NPC } from "./npc"
import { professions } from "./professions"

/**
 * This gets the starting profession.
 */
export function fetchProfessionChance(town: Town, npc: NPC) {
  const populations = Object.entries(town.professions)

  const sum = npc.socialClass
    ? populations.filter(profession => professions[profession[1]].socialClass === npc.socialClass)
    : populations

  const totalWeight = sum.reduce((total, value) => total + value[1], 0)

  let random = Math.floor(randomFloat(1) * totalWeight)
  let index = 0

  for (let i = 0; i < sum.length; i++) {
    random -= sum[i][1]
    if (random < 0) {
      index = i
      break
    }
  }

  return populations[index][0]
}
