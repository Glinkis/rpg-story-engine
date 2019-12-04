import { Building } from "../building/createBuilding"
import { Activity } from "../../../shared/Activity"

export interface Alchemist extends Building {
  name: string
  chemist: any
  wordNoun: string
  buildingType: string
  notableFeature: string
  material: string
  activity: Activity
  priceModifier: number
  size: string
  wealth: string
  expertise: string
  cleanliness: string
  structure: any
}
