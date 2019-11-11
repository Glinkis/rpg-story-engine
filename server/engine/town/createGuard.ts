import { createNPC } from "../npc-generation/createNPC"
import { guardData } from "./guardData"
import { randomRange, randomValue } from "../rolls"

interface Guard {
  name: string
  associatedTown: string
  captain: any
  passageName: string
  livery: string
}

export function createGuard(town): Guard {
  return {
    name: createGuardName(guardData.name, town),
    associatedTown: town.name,
    captain: createNPC(town, {
      dndClass: `fighter`,
      profession: `guard`,
      background: `soldier`,
    }),
    passageName: `GuardOutput`,
    livery: `${randomValue(guardData.primaryColours)} and ${randomValue(
      guardData.secondaryColours
    )} livery adorned with an image of ${randomValue(guardData.insignia)}`,
  }
}

function createGuardName(name: any, town: any) {
  const { group, adjective, noun, alternateAdjective } = name

  switch (randomRange(1, 8)) {
    case 1:
      return `The ${randomValue(group)} of ${town.name}`
    case 2:
      return `The ${town.name} ${randomValue(group)}`
    case 3:
      return `The ${randomValue(group)} of ${randomValue(alternateAdjective)}`
    case 4:
      return `The ${randomValue(adjective)} ${randomValue(group)}`
    case 5:
      return `The ${randomValue(adjective)} ${randomValue(noun)}`
    case 6:
      return `The ${randomValue(adjective)} ${randomValue(noun)} of ${randomValue(alternateAdjective)}`
    case 7:
      return `The ${randomValue(adjective)} ${randomValue(noun)} of ${town.name}`
    default:
      return `The ${randomValue(group)} ${randomValue(noun)} of ${town.name}`
  }
}
