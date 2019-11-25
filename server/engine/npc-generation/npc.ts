import { MajorRace } from "../../../shared/Race"
import { genderData } from "./genderData"

export interface NPC {
  key: string
  name: string
  lastName: string
  race: MajorRace
  family: any
  gender: keyof typeof genderData
  raceName: string
  skinColour: string
  age: string
  bmi: number
  muscleMass: number
  ageYears: number
  ageStage: string
  profession: string
  background: string
  beard: string
  height: string
  weight: string
  physicalTrait: string
  knownLanguages: string[]
  dndClass: string
  hasClass: boolean
  descriptors: string[]
  descriptorsAdd: any
  heightRoll: number
  weightRoll: number
  socialClass: string
  heshe: string
  himher: string
  partnerID?: string
  roll: any
}
