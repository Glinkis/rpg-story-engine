import { random, randomValue, randomFloat, randomRange } from "../rolls"
import { clamp } from "../math"
import { townData } from "../town/townData"
import { createUniqueKey } from "../tools/createUniqueKey"

export interface BuildingRoll {
  magic: number
  size: number
  diversity: number
  wealth: number
  population: number
  reputation: number
  sin: number
  roughness: number
  cleanliness: number
  expertise: number
  activity: number
}

export interface Building {
  key: string
  roadName: string
  roadType: string
  road: string
  associatedTown: string
  type: string
  lighting: string
  outside: string
  material: string
  roll: BuildingRoll
  priceModifier: number
  isThrowaway?: boolean
}

export const buildings: Building[] = []

export function createBuilding(town: any, type: string, base: Partial<Building> = {}): Building {
  let roadName: string
  let roadType: string

  // Tables used later
  if (random(100) < townData.type[town.type].roadDuplication && Object.keys(town.roads).length > 0) {
    // roads are currently only supported with two words
    const randRoad = randomValue(Object.keys(town.roads))
    const roads = town.roads[randRoad].split(` `)
    roadName = roads[0] || randomValue(townData.roads.name)
    roadType = roads[1] || randomValue(townData.roads.type)
  } else {
    roadName = randomValue(townData.roads.name)
    roadType = randomValue(townData.roads.type)
  }

  const lighting = randomValue([
    `poorly lit`,
    `somewhat dark`,
    `dimly lit`,
    `well lit`,
    `brightly lit`,
    `well lit`,
    `brightly lit`,
    `bright and welcoming`,
    `fire-lit`,
  ])

  const outside = randomValue([
    `a horse grazing on the bushes nearby`,
    `a rusted shovel near a somewhat overgrown flowerbed`,
    `a well with an old rope, but no bucket to go on the end`,
    `a dog panting by the door`,
    `a cat lazily lounging in the shade`,
    `a muddy pair of boots by the door`,
    `a sign from the local paper which reads '$newspaperheadline'`,
  ])

  const material = randomValue([
    `wooden`,
    `wooden`,
    `wooden`,
    `wooden`,
    `wooden`,
    `stone`,
    `stone`,
    `stone`,
    `stone`,
    `hewn rock`,
    `chiseled stone`,
    `wooden`,
    `wooden`,
    `wooden`,
    `wooden`,
    `wooden`,
    `stone`,
    `stone`,
    `stone`,
    `stone`,
    `hewn rock`,
    `chiseled stone`,
    `marble`,
  ])

  const building: Building = {
    key: createUniqueKey(),
    roadName,
    roadType,
    get road() {
      return `${this.roadName} ${this.roadType}`
    },
    set road(road) {
      const roads = road.toString().split(` `)
      this.roadName = roads[0] || ``
      this.roadType = roads[1] || ``
    },
    associatedTown: town.name,
    type,
    lighting,
    outside,
    material,
    roll: {
      magic: Math.floor(randomFloat(1) * 80) + 20,
      size: Math.floor(randomFloat(1) * 80) + 20,
      diversity: Math.floor(randomFloat(1) * 80) + 20,
      wealth: randomRange(1, 100),
      population: randomRange(1, 100),
      reputation: randomRange(1, 100),
      sin: randomRange(1, 100),
      roughness: randomRange(1, 100),
      cleanliness: randomRange(1, 100),
      expertise: randomRange(1, 100),
      activity: randomRange(1, 100),
    },
    priceModifier: Math.floor(randomFloat(1) * 10) - randomValue([0, 10]),
    ...base,
  }

  town.roads[building.key] = building.road

  building.priceModifier = clamp(building.priceModifier, -10, 10)

  for (const roll in building.roll) {
    building.roll[roll] = clamp(building.roll[roll], 1, 100)
  }

  if (type) {
    if (!town.buildings[type]) {
      town.buildings[type] = {}
    }
    town.buildings[type][building.key] = building
  }

  if (!building.isThrowaway) {
    buildings.push(building)
  }

  return building
}
