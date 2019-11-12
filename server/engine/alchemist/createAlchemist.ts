import { defineRollDataGetter } from "../tools/defineRollDataGetter"
import { createBuilding } from "../building/createBuilding"
import { structure } from "../building/buildingData"
import { randomValue } from "../rolls"
import { alchemistModifiers } from "./alchemistModifiers"
import { rollData } from "./alchemistData"

export function createAlchemist(town, opts = {}) {
  const chemist = createChemist(town)

  const alchemist = {
    ...createBuilding(town, `alchemist`),
    chemist,
    wordNoun: randomValue(WORD_NOUNS),
    passageName: `AlchemistOutput`,
    initPassage: `InitAlchemist`,
    buildingType: `alchemist`,
    notableFeature: randomValue(NOTABLE_FEATURES),
    name: createAlchemistName(chemist.firstName),
    size: ``,
    wealth: ``,
    expertise: ``,
    cleanliness: ``,
  }

  structure.create(town, alchemist)

  alchemist.structure.alchemistDescriptor = `${alchemist.structure.material.wealth} ${alchemist.structure.material.noun} ${alchemist.wordNoun} with a ${alchemist.structure.roof.verb} roof`

  for (const propName of [`wealth`, `size`, `cleanliness`, `expertise`]) {
    defineRollDataGetter(alchemist, rollData, propName)
  }

  alchemistModifiers(alchemist)

  return alchemist
}

const NOTABLE_FEATURES = [
  `its love potions`,
  `its herbal remedies`,
  `its magical potions`,
  `its wonderful tonics`,
  `its fantastic ointments`,
]

const WORD_NOUNS = [`alchemist`, `potion shop`, `apothecary`, `alchemist`]
