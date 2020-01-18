import { NPC } from "../npc-generation/npc"

export interface Blacksmith extends NPC {
  parentNoun: string
  siblingNoun: string
  niblingNoun: string
  childNoun: string
}
