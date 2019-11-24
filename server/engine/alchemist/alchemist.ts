import { Building } from "../building/createBuilding"

export interface Alchemist extends Building {
  name: string
  chemist: any
  wordNoun: string
  buildingType: string
  notableFeature: string
  material: string
  activity: string
  priceModifier: number
  size: string
  wealth: string
  expertise: string
  cleanliness: string
  structure: any
}
