import { random, randomValue, randomFloat, randomRange } from "../rolls"
import { clamp } from "../math"
import { townData } from "../town/townData"

export function createBuilding(town: any, type: any, base: any) {
  let roadName
  let roadType

  // Tables used later
  if (random(100) < townData.type[town.type].roadDuplication && Object.keys(town.roads).length > 0) {
    // roads are currently only supported with two words
    const randRoad = randomValue(Object.keys(town.roads))
    const roads = town.roads[randRoad].split(" ")
    roadName = roads[0] || randomValue(townData.roads.name)
    roadType = roads[1] || randomValue(townData.roads.type)
  } else {
    roadName = randomValue(townData.roads.name)
    roadType = randomValue(townData.roads.type)
  }

  const lighting = randomValue([
    "poorly lit",
    "somewhat dark",
    "dimly lit",
    "well lit",
    "brightly lit",
    "well lit",
    "brightly lit",
    "bright and welcoming",
    "fire-lit",
  ])

  const outside = randomValue([
    "a horse grazing on the bushes nearby",
    "a rusted shovel near a somewhat overgrown flowerbed",
    "a well with an old rope, but no bucket to go on the end",
    "a dog panting by the door",
    "a cat lazily lounging in the shade",
    "a muddy pair of boots by the door",
    "a sign from the local paper which reads '$newspaperheadline'",
  ])

  const material = randomValue([
    "wooden",
    "wooden",
    "wooden",
    "wooden",
    "wooden",
    "stone",
    "stone",
    "stone",
    "stone",
    "hewn rock",
    "chiseled stone",
    "wooden",
    "wooden",
    "wooden",
    "wooden",
    "wooden",
    "stone",
    "stone",
    "stone",
    "stone",
    "hewn rock",
    "chiseled stone",
    "marble",
  ])

  const building = Object.assign(
    {
      key: randomFloat(1).toString(16),
      roadName,
      roadType,
      get road() {
        return `${this.roadName} ${this.roadType}`
      },
      set road(road) {
        const roads = road.toString().split(" ")
        this.roadName = roads[0] || ""
        this.roadType = roads[1] || ""
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
    },
    base
  )

  town.roads[building.key] = building.road

  building.roll.wealth = clamp(building.roll.wealth, 1, 100)
  building.priceModifier = clamp(building.priceModifier, -10, 10)
  building.roll.reputation = clamp(building.roll.reputation, 1, 100)
  building.roll.sin = clamp(building.roll.sin, 1, 100)
  building.roll.diversity = clamp(building.roll.diversity, 1, 100)
  building.roll.magic = clamp(building.roll.magic, 1, 100)
  building.roll.size = clamp(building.roll.size, 1, 100)
  building.roll.population = clamp(building.roll.population, 1, 100)
  building.roll.roughness = clamp(building.roll.roughness, 1, 100)
  building.roll.cleanliness = clamp(building.roll.cleanliness, 1, 100)
  building.roll.expertise = clamp(building.roll.expertise, 1, 100)
  building.roll.activity = clamp(building.roll.activity, 1, 100)

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
