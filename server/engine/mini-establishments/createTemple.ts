import { createNPC } from "../npc-generation/createNPC"
import { createBuilding } from "../building/createBuilding"
import { misc } from "../world/miscData"
import { randomValue } from "../rolls"
import { structure } from "../building/buildingData"
import { rt } from "../tools/randomTemplate"
import { Town } from "../town/town"

export function createTemple(town: Town) {
  const temple = createBuilding(town, `temple`)

  const data = setup.temple

  Object.assign(temple, {
    passageName: `TempleOutput`,
    initPassage: `TempleOutput`,
    wordNoun: data.name.wordNoun.seededrandom(),
    priest: createNPC(town, {
      dndClass: randomValue([`cleric`, `cleric`, `cleric`, `cleric`, `druid`]),
      background: randomValue([`acolyte`, `acolyte`, `acolyte`, `acolyte`, `sage`, `sage`, `sage`]),
      profession: `priest`,
    }),
    prayerSubject: data.prayerSubject.seededrandom(),
    dedicated: randomValue([
      randomValue(misc.religion.namedGod),
      randomValue(misc.religion.abstractGod),
      randomValue(misc.religion.saint),
      randomValue(data.dedicated),
    ]),
    knownFor: randomValue(data.knownFor),
    guardedBy: randomValue(data.guardedBy),
    floorPlan: randomValue(data.floorPlan),
    complex: randomValue(data.complex),
    walls: randomValue(data.walls),
    ceiling: randomValue(data.ceiling),
    rooms: randomValue(data.rooms),
    features: randomValue(data.features),
    architect: randomValue(data.architect),
    priestChat: `<<print $priest.heshe.toUpperFirst()>> ${randomValue(data.priestChat)}`,
    priestLook: `A temple priest is ${randomValue(data.priestLook)}`,
    blessingConvey: randomValue(data.blessingConvey),
    blessingGift: randomValue(data.blessingGift),
  })

  structure.create(town, temple)

  temple.structure.templeDescriptor = `a ${temple.structure.material.wealth} ${temple.structure.material.noun} ${temple.wordNoun} with a ${temple.structure.roof.verb} roof`

  temple.name = [
    `The ${data.name.adjective
      .seededrandom()
      .toUpperFirst()} ${temple.wordNoun.toUpperFirst()} of ${data.name.plural.seededrandom().toUpperFirst()}`,
    `The ${temple.wordNoun.toUpperFirst()} of ${data.name.soleNoun.seededrandom().toUpperFirst()}`,
    `The ${temple.wordNoun.toUpperFirst()} of ${data.name.adjective
      .seededrandom()
      .toUpperFirst()} ${data.name.plural.seededrandom().toUpperFirst()}`,
    `The ${data.name.colour.seededrandom().toUpperFirst()} ${temple.wordNoun.toUpperFirst()}${[
      ``,
      ` of ${data.name.plural.seededrandom().toUpperFirst()}`,
      ` of ${data.name.soleNoun.seededrandom().toUpperFirst()}`,
    ].seededrandom()}`,
    `${[``, `St. `].seededrandom() +
      setup.createName({ race: temple.priest.race })}'s ${temple.wordNoun.toUpperFirst()}`,
    `${[``, `St. `].seededrandom() +
      setup.createName({ race: temple.priest.race })}'s ${data.name.soleNoun.seededrandom().toUpperFirst()}`,
  ].seededrandom()

  temple.wealth = ``
  temple.size = ``
  temple.cleanliness = ``
  temple.blessing = `${temple.blessingConvey}. ${temple.blessingGift}.`
  const rollDataVariables = [`wealth`, `size`, `cleanliness`]
  for (const propName of rollDataVariables) {
    setup.defineRollDataGetter(temple, data.rollData, propName)
  }

  // These are the full sentence printouts referenced within TempleOutput.twee
  temple.guardReadout = `This ${temple.wordNoun} is protected by ${temple.guardedBy}.`
  temple.aboutReadout = `Within this holy place they pray to ${temple.prayerSubject}. The temple itself was originally dedicated to ${temple.dedicated} and is known for ${temple.knownFor}.`
  temple.interiorReadout = rt`You enter the ${temple.size}, ${temple.cleanliness} ${temple.wordNoun} and notice ${
    temple.features
  }. The main room is ${temple.floorPlan} in shape and is decorated with ${temple.wealth} looking ${[
    `furniture`,
    `pews`,
    `relics`,
    `holy statues`,
    `holy symbols`,
    `stained glass windows`,
    `holy art`,
  ]}. The interior walls of the ${temple.wordNoun} are ${temple.walls} and the the ceiling is ${temple.ceiling}. The ${
    temple.wordNoun
  } was designed by ${temple.architect} and it is ${temple.complex}.`
  temple.tippyDescription = `A ${temple.size} and ${temple.cleanliness} ${temple.wordNoun} that is dedicated to ${temple.dedicated}`
  return temple
}
