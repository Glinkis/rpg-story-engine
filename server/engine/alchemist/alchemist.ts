import { Building } from "../building/createBuilding"

export interface Alchemist extends Building {
  name: string
  material: string
  activity: string
  priceModifier: number
}
