import { randomFloat } from "../rolls"

export function fetchRace(town: any, saveLoc: any) {
  console.log(`Fetching race...`)

  // FIXME upon migration to React, reimplement getters and setters.
  const races = Object.keys(town.baseDemographics)

  // Calculate the sum of the raw demographic values.
  const sum = races.map(byRace => town.baseDemographics[byRace]).reduce((acc, cur) => acc + cur, 0)

  // Calculate the demographic percentages.
  for (const race of races) {
    town._demographic[race] = (town.baseDemographics[race] / sum) * 100
  }

  const args = town._demographic
  console.log(args)
  const pool = []
  const namePool = Object.keys(args)
  let totalWeight = 0
  for (const arg in args) {
    pool.push(args[arg])
    totalWeight += args[arg]
  }
  saveLoc.raceRoll = saveLoc.raceRoll || Math.floor(randomFloat(1) * totalWeight)

  let random = saveLoc.raceRoll
  let index = 0

  for (let i = 0; i < pool.length; i++) {
    random -= pool[i]
    if (random < 0) {
      index = i
      break
    }
  }

  return namePool[index]
}
