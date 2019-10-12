import { dice, randomFloat, randomValue } from "../rolls"
import { createUniqueKey } from "../tools/createUniqueKey"
import { factionData } from "./factionData"
import { ageFaction } from "./ageFaction"
import { nameFaction } from "./nameFaction"
import { sizeFaction } from "./sizeFaction"
import { reputationFaction } from "./repuationFaction"

export interface FactionRoll {
  influence: number
  reputation: number
  age: number
  size: number
  stability: number
  resources: number
}

export interface Faction {
  key: string
  passageName: string
  associatedTown: string
  type: string
  name: string
  age: string
  roll: FactionRoll
  size: string
  wordNoun: string
  motivation: string
  reputation: string
  membersTrait: string
  leadershipType: string
  tippyDescription: string
  isThrowaway?: boolean
}

export function createFaction(town, opts: Partial<Faction> = {}): Faction {
  const type = randomValue(factionTypes)
  // s are defined immediately in case they're needed in the subroutines out of order (i.e. it makes no sense to initialise Size in the size.js function if it's being used in "reputation.js")

  const faction = {
    key: createUniqueKey(),
    passageName: `FactionProfile`,
    associatedTown: town.name,
    type,
    name: ``,
    age: ``,
    size: ``,
    tippyDescription: ``,
    wordNoun: factionData.type[type].wordNoun,
    reputation: ``,
    motivation: randomValue(factionData.type[type].motivation) as string,
    membersTrait: randomValue(factionData.type[type].membersTrait) as string,
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

  faction.name = nameFaction(town.name, faction.type)
  faction.age = ageFaction(faction)

  reputationFaction(faction)

  sizeFaction(town, faction)

  // TODO: setup.influenceFaction(faction)

  // TODO: setup.resourcesFaction(faction)

  // TODO: setup.stabilityFaction(faction)

  // TODO: setup.leaderFaction(town, faction)

  // TODO: setup.joinFaction(faction)

  // TODO: setup.createAllies(faction)

  // TODO: setup.createRivals(faction)

  // TODO: setup.createMisc(faction)

  faction.tippyDescription = `A ${faction.size} ${faction.type} ${faction.wordNoun} called ${faction.name}`

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
