import { NPC } from "./npc-generation/npc"
import { Town } from "./town/town"

interface Variables {
  npcs: Record<string, NPC>
  town?: Town
}

export const variables: Variables = {
  npcs: {},
}
