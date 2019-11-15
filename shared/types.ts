export enum Biome {
  Forest = `forest`,
  Desert = `desert`,
  Mountain = `mountain`,
  Plains = `plains`,
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
  weather: Weather
  start: string[]
  location: Record<string, Location>
}

interface Weather {
  tempVariation: Record<number, TempVariation>
  season: Record<string, Season>
}

interface TempVariation {
  temperature: number
  temperatureTimer: number
}

interface Season {
  precipitationLevel: number
  precipitationIntensity: number
  baseTemp: number
}

interface Location {
  precipitationIntensity?: number
  origin: string[]
  vegetation: string[]
  plants: string[]
}
