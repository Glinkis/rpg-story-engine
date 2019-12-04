import { Activity } from "../../../shared/Activity"
import { defineRollDataGetter } from "../tools/defineRollDataGetter"
import { createBuilding } from "../building/createBuilding"
import { structure } from "../building/buildingData"
import { randomValue } from "../rolls"
import { alchemistModifiers } from "./alchemistModifiers"
import { createAlchemistName } from "./createAlchemistName"
import { createChemist } from "./createChemist"
import { rollData } from "./alchemistData"
import { Town } from "../town/town"
import { Alchemist } from "./alchemist"

export function createAlchemist(town: Town, opts = {}) {
  const chemist = createChemist(town)

  const alchemist: Alchemist = {
    ...createBuilding(town, `alchemist`),
    chemist,
    wordNoun: randomValue(WORD_NOUNS),
    buildingType: `alchemist`,
    notableFeature: randomValue(NOTABLE_FEATURES),
    name: createAlchemistName(chemist.firstName),
    size: ``,
    wealth: ``,
    activity: Activity.ReasonablyBusy,
    expertise: ``,
    cleanliness: ``,
    structure: {},
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
