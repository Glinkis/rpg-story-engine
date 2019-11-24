import { Season } from "../../../shared/types"
import { fetchProfessions } from "../tools/fetchProfessions"
import { randomValue, randomRange, dice } from "../rolls"
import { clamp, fm } from "../math"
import { townDemographics } from "./townDemographics"
import { createTownName } from "./createTownName"
import { townData } from "./townData"
import { townRender } from "./townRender"
import { createGuard } from "./createGuard"
import { createStartFactions } from "./createStartFactions"
import { Town } from "./town"
import { createUniqueKey } from "../tools/createUniqueKey"

export function createTown(base: Partial<Town> = {}) {
  const type = randomValue(TYPES)
  const terrain = randomValue(TERRAINS)

  const economicIdeology = randomValue(townData.type[type].economicIdeology)
  const politicalSource = randomValue(townData.type[type].politicalSource)
  const politicalIdeology = randomValue(townData.politicalSource[politicalSource].politicalIdeology)

  const economicIdeologyDetails = townData.economicIdeology[economicIdeology].descriptors
  const politicalIdeologyDetails = townData.politicalIdeology[politicalIdeology].data

  const town: Town = {
    key: createUniqueKey(),
    name: createTownName(),
    taxes: {
      base: 7,
      welfare: 1,
      military: 1,
      tithe: 1,
    },
    get type() {
      if (this.population > 3000) {
        return `city`
      } else if (this.population > 1000) {
        return `town`
      } else if (this.population > 300) {
        return `village`
      } else if (this.population > 30) {
        return `hamlet`
      } else {
        this.population = 30
        return `hamlet`
      }
    },
    set type(this: any, value) {
      this._type = value
    },
    terrain,
    season: randomValue(Season),
    families: [],
    factions: [],
    buildings: {},
    professions: {},
    population: townData.type[type].population(),
    _demographic: {},
    get baseDemographics() {
      return this._baseDemographics
    },
    set baseDemographics(this: any, newDemographics) {
      for (const byRace of Object.keys(newDemographics)) {
        this._baseDemographics[byRace] = newDemographics[byRace]
      }
    },
    get demographic(): any {
      // Get an array of the demographic keys (race names).
      const races = Object.keys(this.baseDemographics)
      // Calculate the sum of the raw demographic values.
      const sum = races.map(byRace => this.baseDemographics[byRace]).reduce((acc, cur) => acc + cur, 0)
      // Calculate the demographic percentages.
      races.forEach(byRace => {
        this._demographic[byRace] = (this.baseDemographics[byRace] / sum) * 100
      })
      return this._demographic
    },
    economicIdeology,
    ...economicIdeologyDetails,
    politicalSource,
    politicalIdeology,
    ...politicalIdeologyDetails,
    get wealth() {
      let wealth = townData.rollData.wealth.find(descriptor => descriptor[0] <= this.roll.wealth)
      if (wealth === undefined) {
        console.log(
          `Could not find a wealthRoll descriptor that was appropriate for a roll of ${this.roll.wealth} for ${this.name}`
        )
        wealth = townData.rollData.wealth[townData.rollData.wealth.length - 1]
      }
      this._wealth = wealth[1]
      return this._wealth
    },
    set wealth(value) {
      this._wealth = value
    },
    roads: {},
    location: randomValue(townData.terrain[terrain].start),
    primaryCrop: randomValue(townData.misc.primaryCrop),
    primaryExport: randomValue(townData.misc.primaryExport),
    landmark: randomValue(townData.misc.landmark),
    currentEvent: randomValue(townData.misc.currentEvent),
    roll: {
      wealth: randomRange(1, 100),
      reputation: randomRange(1, 100),
      religiosity: randomRange(1, 100),
      sin: randomRange(1, 100),
      diversity: randomRange(1, 100),
      magic: randomRange(1, 100),
      size: randomRange(1, 100),
      economics: randomRange(1, 100),
      welfare: randomRange(1, 100),
      military: randomRange(1, 100),
      law: randomRange(1, 100),
      arcana: randomRange(1, 100),
      equality: clamp(dice(2, 50) + 20, 1, 100),
    },
    ...base,
  }

  town._baseDemographics = townDemographics(town)
  town.professions = fetchProfessions(town)

  town.economicIdeology = town.economicIdeology || town._economicIdeology
  town.politicalIdeology = town.politicalIdeology || town._politicalIdeology
  town.origin = randomValue(townData.terrain[town.terrain].location[town.location].origin)
  town.vegetation = randomValue(townData.terrain[town.terrain].location[town.location].vegetation)

  for (const roll of Object.keys(town.roll)) {
    town.roll[roll] = clamp(town.roll[roll], 1, 100)
  }

  const townSizeModifiers = townData.type[town.type].modifiers
  for (const modifier of Object.keys(townSizeModifiers)) {
    town.roll[modifier] = fm(town.roll[modifier], townSizeModifiers[modifier])
  }

  town.guard = createGuard(town)

  const economicIdeologyModifiers = townData.economicIdeology[town.economicIdeology].modifiers
  for (const modifier of Object.keys(economicIdeologyModifiers)) {
    town.roll[modifier] = fm(town.roll[modifier], economicIdeologyModifiers[modifier])
  }

  const politicalIdeologyModifiers = townData.politicalIdeology[town.politicalIdeology].modifiers
  for (const modifier of Object.keys(politicalIdeologyModifiers)) {
    town.roll[modifier] = fm(town.roll[modifier], politicalIdeologyModifiers[modifier])
  }

  // TODO: setup.createSocioPolitics(town)

  for (const roll of Object.keys(town.roll)) {
    clamp(town.roll[roll], 1, 100)
  }

  townRender(town)
  // createStartBuildings(town)
  createStartFactions(town)

  return town
}

export function taxRate(town: Town) {
  let totalTax = 0
  for (const tax in town.taxes) {
    totalTax += town.taxes[tax]
  }
  return Math.round(totalTax * 100) / 100
}

export function politicalSourceDescription(town: Town) {
  const source = townData.politicalSource[town.politicalSource]
  if (town.politicalSource === `absolute monarchy` || town.politicalSource === `constitutional monarchy`) {
    if (town.politicalIdeology === `autocracy`) {
      return source.autocracy.politicalSourceDescription
    }
    return source.default.politicalSourceDescription
  }
  return source.politicalSourceDescription
}

const TYPES = [`hamlet`, `hamlet`, `village`, `village`, `village`, `town`, `town`, `town`, `city`, `city`]

const TERRAINS = [`temperate`, `temperate`, `temperate`, `tropical`, `polar`, `arid`]
