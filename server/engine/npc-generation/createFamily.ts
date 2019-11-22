import { Town } from "../town/town"
import { NPC } from "./npc"
import { createUniqueKey } from "../tools/createUniqueKey"

export function createFamily(town: Town, npc: NPC) {
  const name = `${npc.lastName} family`

  npc.family = name

  town.families.push({
    key: createUniqueKey(),
    name: name,
    members: {
      [npc.key]: {
        key: npc.key,
        parentMarriage: undefined,
        marriages: undefined,
        canRemarry: true,
      },
    },
  })
}
