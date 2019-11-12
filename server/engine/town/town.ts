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
  factions: Record<string, any>
  buildings: Record<string, any>
  taxRate(town: Town): number
  [key: string]: any
}
