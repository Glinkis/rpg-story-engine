export enum Season {
  Summer = `summer`,
  Autumn = `autumn`,
  Winter = `winter`,
  Spring = `spring`,
}

export type Roll = [number, ...string[]]

export type RollData = Record<string, Roll[]>

export interface Seed<T = never> {
  readonly value: string
  readonly modifiers?: Partial<T>
}

export interface LookAround {
  readonly cleanliness: number
  readonly wealth: number
  readonly note: string
}

export interface PriceTalk {
  readonly priceModifier: number
  readonly wealth: number
  readonly priceTalk: string
}

export interface Expertise {
  readonly expertise: number
  readonly wealth: number
  readonly note: string
}

export interface Terrain {
  readonly weather: Weather
  readonly start: string[]
  readonly location: Record<string, Location>
}

interface Weather {
  readonly tempVariation: Record<number, TempVariation>
  readonly season: Record<Season, SeasonData>
}

interface TempVariation {
  readonly temperature: number
  readonly temperatureTimer: number
}

interface SeasonData {
  readonly precipitationLevel: number
  readonly precipitationIntensity: number
  readonly baseTemp: number
}

interface Location {
  readonly precipitationIntensity?: number
  readonly origin: string[]
  readonly vegetation: string[]
  readonly plants: string[]
}
