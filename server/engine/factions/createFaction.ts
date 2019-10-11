import { dice, randomFloat, randomValue } from "../rolls"
import { createUniqueKey } from "../tools/createUniqueKey"
import { factionData } from "./factionData"
import { ageFaction } from "./ageFaction"

export function createFaction(town, opts = {}) {
  const type = randomValue(factionTypes)
  // s are defined immediately in case they're needed in the subroutines out of order (i.e. it makes no sense to initialise Size in the size.js function if it's being used in "reputation.js")

  const faction = opts[`newFaction`] || {
    id: createUniqueKey(),
    key: randomFloat(1).toString(16),
    passageName: `FactionProfile`,
    associatedTown: town.name,
    type,
    wordNoun: factionData.type[type].wordNoun,
    motivation: randomValue(factionData.type[type].motivation),
    membersTrait: randomValue(factionData.type[type].membersTrait),
    leadershipType: randomValue([`individual`, `individual`, `individual`, `group`, `group`]),
    roll: {
      influence: dice(2, 50),
      reputation: dice(2, 50),
      age: dice(2, 50),
      size: dice(2, 50),
      stability: dice(2, 50),
      resources: dice(2, 50),
    },
    ...opts,
  }

  // TODO: faction.name = setup.nameFaction(town.name, faction.type)

  console.groupCollapsed(`${faction.name} the ${faction.type} have loaded.`)

  ageFaction(faction)

  // TODO: setup.reputationFaction(faction)

  // TODO: setup.sizeFaction(town, faction)

  // TODO: setup.influenceFaction(faction)

  // TODO: setup.resourcesFaction(faction)

  // TODO: setup.stabilityFaction(faction)

  // TODO: setup.leaderFaction(town, faction)

  // TODO: setup.joinFaction(faction)

  // TODO: setup.createAllies(faction)

  // TODO: setup.createRivals(faction)

  // TODO: setup.createMisc(faction)

  faction.tippyDescription = `A ${faction.size} ${faction.type} ${faction.wordNoun} called ${faction.name}`

  console.groupEnd()
  return faction
}

const factionTypes = [
  `thieves`,
  `merchants`,
  `wizards`,
  `rangers`,
  `seers`,
  `priests`,
  `monks`,
  `assassins`,
  `artisans`,
  `nobles`,
  `bards`,
  `mercenaries`,
  `bandits`,
  `craftsmen`,
  `scholars`,
]
