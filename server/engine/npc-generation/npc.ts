import { Race } from "./npcData"

export interface NPC {
  key: string
  name: string
  lastName: string
  race: Race
  family: any
  gender: string
  raceName: string
  skinColour: string
  age: any
  bmi: any
  muscleMass: any
  ageYears: number
  ageStage: string
  profession: string
  background: string
  beard: any
  height: any
  weight: any
  physicalTrait: string
  knownLanguages: string[]
  dndClass: string
  hasClass: boolean
  descriptors: string[]
  descriptorsAdd: any
  heightRoll: any
  weightRoll: any
  socialClass: string
  heshe: string
  himher: string
  roll: any
}
