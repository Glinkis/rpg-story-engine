import { createFaction } from "../factions/createFaction"
import { pluck, randomValue } from "../rolls"
import { Town } from "./town"

export function createStartFactions(town: Town) {
  const factions = [`merchants`, `merchants`, `merchants`, `thieves`, `nobles`, `wizards`]

  let factionsNumber = getNumberOfStartFactions(town.type)

  if (town.roll.wealth > 90) {
    factionsNumber += 2
  } else if (town.roll.wealth > 70) {
    factionsNumber += 1
  }

  for (let i = 0; i <= factionsNumber; i++) {
    const tempFaction = createFaction(town, {
      type: pluck(factions),
    })
    town.factions.push(tempFaction)
  }

  return town
}

function getNumberOfStartFactions(townType: string) {
  switch (townType) {
    case `hamlet`:
      return randomValue([1, 1, 1, 1, 1, 2])
    case `village`:
      return randomValue([1, 1, 1, 2, 2, 2])
    case `town`:
      return randomValue([1, 1, 2, 2, 2, 3, 3])
    case `city`:
      return randomValue([1, 1, 2, 2, 2, 3, 3, 3, 3, 4])
  }
  throw new Error(`Town type ${townType} is not supported.`)
}
