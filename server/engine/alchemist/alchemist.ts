import { Building } from "../building/createBuilding"
import { Activity } from "../../../shared/Activity"
import { Wealth } from "../../../shared/Wealth"

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
  wealth: Wealth
  expertise: string
  cleanliness: string
  structure: any
}
