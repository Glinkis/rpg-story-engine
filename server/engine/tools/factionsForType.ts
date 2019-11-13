import { clone } from "../utils"
import { randomValue } from "../rolls"
import { createFaction, Faction } from "../factions/createFaction"
import { Town } from "../town/town"

/**
 * Returns a random of factions for a leadership type.
 *
 * @param town The town object. Like most times it's passed as an argument, it's mandatory here.
 *
 * @param key The thing that we're searching for.
 * This can be leadershipType, type, etc.
 *
 * @param value The value that is expected for variable.
 * if it doesn't find any, it creates a matching faction.
 * This is for plot hooks that require a wizard's college, etc.
 */
export function factionsForType<K extends keyof Faction>(town: Town, key: K, value: Faction[K]) {
  const found: Faction[] = []

  for (const faction of Object.values(town.factions)) {
    if (faction[key] === value) {
      found.push(clone(faction))
    }
  }

  if (found.length) {
    return randomValue(found)
  }

  const tempFaction = createFaction(town, {
    [key]: value,
    isThrowaway: true,
  })

  town.factions[tempFaction.key] = tempFaction

  return tempFaction
}
