import { MajorRace } from "../../../shared/Race"
import { AgeStage } from "../../../shared/AgeStage"
import { SocialClass } from "../../../shared/SocialClass"

import { genderData } from "./genderData"

export interface NPC {
  key: string
  name: string
  firstName: string
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
  ageStage: AgeStage
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
  socialClass: SocialClass
  heshe: string
  himher: string
  partnerID?: string
  relationships: any
  roll: any
  dndClassOrigin: any
  weapon: any
}
