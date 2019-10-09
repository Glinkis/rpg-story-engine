import { randomValue, randomRange, dice } from "../rolls"
import { townData } from "./data"
import { clamp, fm } from "../math"

const setup = {} as any

interface Town {
  [key: string]: any
}

export function createTown(base: any) {
  const type = randomValue([
    "hamlet",
    "hamlet",
    "village",
    "village",
    "village",
    "town",
    "town",
    "town",
    "city",
    "city",
  ])
  const terrain = randomValue(["temperate", "temperate", "temperate", "tropical", "polar", "arid"])
  const season = ["summer", "autumn", "winter", "spring"]
  const townName = setup.createTownName()
  console.groupCollapsed(townName + " is loading...")
  const economicIdeology = randomValue(townData.type[type].economicIdeology)
  const politicalSource = randomValue(townData.type[type].politicalSource)
  const politicalIdeology = randomValue(townData.politicalSource[politicalSource].politicalIdeology)
  const town = Object.assign(
    {
      passageName: "TownOutput",
      name: townName,
      taxes: {
        base: 7,
        welfare: 1,
        military: 1,
        tithe: 1,
      },
      taxRate(town: Town) {
        let totalTax = 0
        Object.keys(town.taxes).forEach(function(tax) {
          if (typeof town.taxes[tax] === "number") {
            totalTax += town.taxes[tax]
          } else if (typeof town.taxes[tax] === "function") {
            const temp = town.taxes[tax](this)
            totalTax += temp
          } else {
            console.log("non-integer tax! " + town.taxes[tax])
          }
        })
        return Math.round(totalTax * 100) / 100
      },
      get type() {
        console.log("Getting town type.")
        if (this.population > 3000) {
          return "city"
        } else if (this.population > 1000) {
          return "town"
        } else if (this.population > 300) {
          return "village"
        } else if (this.population > 30) {
          return "hamlet"
        } else if (this.population <= 30) {
          console.log("Population is less than 30. Setting to 30.")
          this.population = 30
          return "hamlet"
        }
      },
      set type(value) {
        console.log("Setting town type.")
        this._type = value
      },
      // type: type,
      terrain,
      currentSeason: randomValue(season),
      season,
      factions: {},
      buildings: {},
      families: {},
      population: townData.type[type].population(),
      _demographic: {},
      // Clone the raw demographic data for the town type.
      // _baseDemographics: clone(setup.townData.type['hamlet'].demographics.seededrandom().output),
      get baseDemographics() {
        console.log("Getting base demographics.")
        return this._baseDemographics
      },
      set baseDemographics(newDemographics) {
        console.log("Setting base demographics.")
        Object.keys(newDemographics).forEach(function(byRace) {
          this._baseDemographics[byRace] = newDemographics[byRace]
        }, this)
        console.log(this.demographic)
      },
      get demographic() {
        // console.log('Getting demographic percent.')
        // Get an array of the demographic keys (race names).
        const races = Object.keys(this.baseDemographics)
        // Calculate the sum of the raw demographic values.
        const sum = races
          .map(function(byRace) {
            return this.baseDemographics[byRace]
          }, this)
          .reduce(function(acc, cur) {
            return acc + cur
          }, 0)
        // Calculate the demographic percentages.
        races.forEach(function(byRace) {
          this._demographic[byRace] = (this.baseDemographics[byRace] / sum) * 100
        }, this)
        return this._demographic
      },
      _economicIdeology: economicIdeology,
      _politicalSource: politicalSource,
      _politicalIdeology: politicalIdeology,
      get economicIdeology() {
        console.log("Getting town economic ideology.")
        return this._economicIdeology
      },
      set economicIdeology(value) {
        console.log("Setting town economic ideology.")
        this._economicIdeology = value
        Object.assign(this, townData.economicIdeology[this._economicIdeology].descriptors)
      },
      get politicalSource() {
        console.log("Getting town political source.")
        return this._politicalSource
      },
      set politicalSource(value) {
        console.log("Setting town political source.")
        this._politicalSource = value
      },
      get politicalIdeology() {
        console.log("Getting town political ideology.")
        return this._politicalIdeology
      },
      set politicalIdeology(value) {
        console.log("Setting town political ideology.")
        this._politicalIdeology = value
        Object.assign(this, townData.politicalIdeology[this._politicalIdeology].data)
      },
      get politicalSourceDescription() {
        console.log("Getting town political source description.")
        if (this._politicalSource === "absolute monarchy" || this._politicalSource === "constitutional monarchy") {
          if (this.politicalIdeology === "autocracy") {
            return townData.politicalSource[this._politicalSource].autocracy.politicalSourceDescription
          } else {
            return townData.politicalSource[this._politicalSource].default.politicalSourceDescription
          }
        } else {
          return townData.politicalSource[this._politicalSource].politicalSourceDescription
        }
      },
      get wealth() {
        console.log("Getting town wealth.")
        let wealth = townData.rollData.wealth.find(function(descriptor) {
          return descriptor[0] <= this.roll.wealth
        }, this)
        if (wealth === undefined) {
          console.log(
            "Could not find a wealthRoll descriptor that was appropriate for a roll of " +
              this.roll.wealth +
              " for " +
              this.name
          )
          wealth = townData.rollData.wealth[townData.rollData.wealth.length - 1]
        }
        this._wealth = wealth[1]
        return this._wealth
      },
      set wealth(value) {
        console.log("Setting town wealth.")
        this._wealth = value
      },
      roads: {},
      location: randomValue(townData.terrain[terrain].start),
      primaryCrop: randomValue(townData.misc.primaryCrop),
      primaryExport: randomValue(townData.misc.primaryExport),
      landmark: randomValue(townData.misc.landmark),
      currentEvent: randomValue(townData.misc.currentEvent),
      microEvent: townData.misc.microEvent,
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
    },
    base
  )

  setup.townDemographics(town)
  town.professions = setup.fetchProfessions(town)

  town.economicIdeology = town.economicIdeology || town._economicIdeology
  town.politicalIdeology = town.politicalIdeology || town._politicalIdeology
  town.politicalSource = town.politicalSource || town._politicalSource
  town.origin = randomValue(townData.terrain[town.terrain].location[town.location].origin)
  town.vegetation = randomValue(townData.terrain[town.terrain].location[town.location].vegetation)

  Object.keys(town.roll).forEach(function(roll) {
    town.roll[roll].clamp(1, 100)
  })

  console.log(`Assigning town size modifiers (btw ${town.name} is a ${town.type})`)
  const townSizeModifiers = townData.type[town.type].modifiers

  Object.keys(townSizeModifiers).forEach(function(modifier) {
    town.roll[modifier] = fm(town.roll[modifier], townSizeModifiers[modifier])
  })

  town.guard = setup.createGuard(town)

  console.log(`Assigning economic modifiers (btw ${town.name} is a ${town.economicIdeology})`)
  const economicIdeologyModifiers = townData.economicIdeology[town.economicIdeology].modifiers

  Object.keys(economicIdeologyModifiers).forEach(modifier => {
    console.log(economicIdeologyModifiers[modifier])
    town.roll[modifier] = fm(town.roll[modifier], economicIdeologyModifiers[modifier])
  })

  console.log(`Assigning political ideology modifiers (btw ${town.name} is a ${town.politicalIdeology})`)
  const politicalIdeologyModifiers = townData.politicalIdeology[town.politicalIdeology].modifiers

  Object.keys(politicalIdeologyModifiers).forEach(modifier => {
    console.log(modifier)
    console.log(politicalIdeologyModifiers[modifier])
    town.roll[modifier] = fm(town.roll[modifier], politicalIdeologyModifiers[modifier])
  })

  setup.createSocioPolitics(town)

  Object.keys(town.roll).forEach(roll => {
    town.roll[roll].clamp(1, 100)
  })

  setup.townRender(town)
  setup.createStartBuildings(town)
  setup.createStartFactions(town)

  console.log(town)
  console.groupEnd()
  console.log(town.name + " has loaded.")

  return town
}
