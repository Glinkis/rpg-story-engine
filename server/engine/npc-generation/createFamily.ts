import { Town } from "../town/town"
import { NPC } from "./npc"

export function createFamily(town: Town, npc: NPC) {
  const key = `${npc.lastName} family`

  npc.family = key
  town.families[key] = {
    key,
    members: {
      [npc.key]: {
        key: npc.key,
        parentMarriage: undefined,
        marriages: undefined,
        canRemarry: true,
      },
    },
  }
}
