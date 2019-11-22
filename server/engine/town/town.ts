import { Faction } from "../factions/createFaction"
import { Building } from "../building/createBuilding"
import { Season } from "../../../shared/types"

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
  families: any[]
  factions: Faction[]
  season: Season
  buildings: Record<string, Record<string, Building>>
  professions: Record<string, number>
  politicalSource: string
  roll: Record<string, number>
  [key: string]: any
}
