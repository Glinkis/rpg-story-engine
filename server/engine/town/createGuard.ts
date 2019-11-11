import { rt } from "../tools/randomTemplate"
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
    name: createGuardName(town),
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

function createGuardName(town: any) {
  const { group, adjective, noun, alternateAdjective } = guardData.name

  switch (randomRange(1, 8)) {
    case 1:
      return rt`The ${group} of ${town.name}`
    case 2:
      return rt`The ${town.name} ${group}`
    case 3:
      return rt`The ${group} of ${alternateAdjective}`
    case 4:
      return rt`The ${adjective} ${group}`
    case 5:
      return rt`The ${adjective} ${noun}`
    case 6:
      return rt`The ${adjective} ${noun} of ${alternateAdjective}`
    case 7:
      return rt`The ${adjective} ${noun} of ${town.name}`
    case 8:
      return rt`The ${group} ${noun} of ${town.name}`
  }

  throw new RangeError(`Roll out of option range.`)
}
