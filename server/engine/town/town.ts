import { Faction } from "../factions/createFaction"
import { Building } from "../building/createBuilding"

interface Taxes {
  base: number
  welfare: number
  military: number
  tithe: number
}

// TODO: Fill out.
export interface Town {
  name: string
  taxes: Taxes
  terrain: string
  location: string
  population: number
  roads: Record<string, any>
  families: Record<string, any>
  factions: Record<string, Faction>
  buildings: Record<string, Building>
  professions: Record<string, number>
  roll: Record<string, number>
  taxRate(town: Town): number
  [key: string]: any
}
