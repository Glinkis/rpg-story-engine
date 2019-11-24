import { createNPC } from "../npc-generation/createNPC"
import { createBuilding, Building } from "../building/createBuilding"
import { randomValue } from "../rolls"
import { structure } from "../building/buildingData"
import { rt } from "../tools/randomTemplate"
import { Town } from "../town/town"
import { religion } from "../world/religion"
import { templeData } from "./templeData"
import { toUpperFirst } from "../tools/toUpperFirst"
import { defineRollDataGetter } from "../tools/defineRollDataGetter"
import { NPC } from "../npc-generation/npc"

interface Temple extends Building {
  wordNoun: string
  priest: NPC
  playerSubject: string
  dedicated: string
  wealth: string
  size: string
  cleanliness: string
  knownFor: string
  guardedBy: string
  floorPlan: string
  complex: string
  walls: string
  ceiling: string
  rooms: string
  features: string
  architect: string
  priestChat: string
  priestLook: string
  blessing: string
  blessingConvey: string
  blessinGift: string
}

export function createTemple(town: Town): Temple {
  const data = templeData

  const priest = createNPC(town, {
    dndClass: randomValue([`cleric`, `cleric`, `cleric`, `cleric`, `druid`]),
    background: randomValue([`acolyte`, `acolyte`, `acolyte`, `acolyte`, `sage`, `sage`, `sage`]),
    profession: `priest`,
  })

  const temple = {
    ...createBuilding(town, `temple`),
    wordNoun: randomValue(data.name.wordNoun),
    priest,
    prayerSubject: randomValue(data.prayerSubject),
    dedicated: randomValue([
      randomValue(religion.namedGod),
      randomValue(religion.abstractGod),
      randomValue(religion.saint),
      randomValue(data.dedicated),
    ]),
    name: ``,
    wealth: ``,
    size: ``,
    cleanliness: ``,
    knownFor: randomValue(data.knownFor),
    guardedBy: randomValue(data.guardedBy),
    floorPlan: randomValue(data.floorPlan),
    complex: randomValue(data.complex),
    walls: randomValue(data.walls),
    ceiling: randomValue(data.ceiling),
    rooms: randomValue(data.rooms),
    features: randomValue(data.features),
    architect: randomValue(data.architect),
    priestChat: `${toUpperFirst(priest.heshe)} ${randomValue(data.priestChat)}`,
    priestLook: `A temple priest is ${randomValue(data.priestLook)}`,
    blessing: ``,
    blessingConvey: randomValue(data.blessingConvey),
    blessingGift: randomValue(data.blessingGift),
    structure: {} as any,
  }

  structure.create(town, temple)

  temple.structure.templeDescriptor = `a ${temple.structure.material.wealth} ${temple.structure.material.noun} ${temple.wordNoun} with a ${temple.structure.roof.verb} roof`

  temple.name = randomValue([
    `The ${toUpperFirst(randomValue(data.name.adjective))} ${toUpperFirst(temple.wordNoun)} of ${toUpperFirst(
      randomValue(data.name.plural)
    )}`,
    `The ${toUpperFirst(temple.wordNoun)} of ${toUpperFirst(randomValue(data.name.soleNoun))}`,
    `The ${toUpperFirst(temple.wordNoun)} of ${toUpperFirst(randomValue(data.name.adjective))} ${toUpperFirst(
      randomValue(data.name.plural)
    )}`,
    `The ${toUpperFirst(randomValue(data.name.colour))} ${toUpperFirst(temple.wordNoun)}${randomValue([
      ``,
      ` of ${toUpperFirst(randomValue(data.name.plural))}`,
      ` of ${toUpperFirst(randomValue(data.name.soleNoun))}`,
    ])}`,
    `${randomValue([``, `St. `]) + setup.createName({ race: temple.priest.race })}'s ${toUpperFirst(temple.wordNoun)}`,
    `${randomValue([``, `St. `]) + setup.createName({ race: temple.priest.race })}'s ${toUpperFirst(
      randomValue(data.name.soleNoun)
    )}`,
  ])

  temple.blessing = `${temple.blessingConvey}. ${temple.blessingGift}.`

  for (const property of [`wealth`, `size`, `cleanliness`]) {
    defineRollDataGetter(temple, data.rollData, property)
  }

  // These are the full sentence printouts referenced within TempleOutput.twee
  temple.guardReadout = `This ${temple.wordNoun} is protected by ${temple.guardedBy}.`

  temple.aboutReadout = `Within this holy place they pray to ${temple.prayerSubject}. The temple itself was originally dedicated to ${temple.dedicated} and is known for ${temple.knownFor}.`

  temple.interiorReadout = rt`You enter the ${temple.size}, ${temple.cleanliness} ${temple.wordNoun} and notice ${temple.features}. The main room is ${temple.floorPlan} in shape and is decorated with ${temple.wealth} looking ${MINOR_FEATURE}. The interior walls of the ${temple.wordNoun} are ${temple.walls} and the the ceiling is ${temple.ceiling}. The ${temple.wordNoun} was designed by ${temple.architect} and it is ${temple.complex}.`

  return temple
}

const MINOR_FEATURE = [
  `furniture`,
  `pews`,
  `relics`,
  `holy statues`,
  `holy symbols`,
  `stained glass windows`,
  `holy art`,
]
