import { AgeStage } from "../../../shared/AgeStage"
import { MajorRace } from "../../../shared/Race"
import { NPC } from "../npc-generation/npc"

export interface Blacksmith extends NPC {
  key: any
  parentNoun: string
  siblingNoun: string
  niblingNoun: string
  childNoun: string
  ageStage: AgeStage
  race: MajorRace
  firstName: string
  lastName: string
}
