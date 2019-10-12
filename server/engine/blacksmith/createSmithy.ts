import { randomValue } from "../rolls"
import { structure } from "../building/buildingData"
import { defineRollDataGetter } from "../tools/defineRollDataGetter"
import { createBuilding } from "../building/create"
import { createBlacksmith } from "./createBlacksmith"
import { createSmithyName } from "./createSmithyName"

export function createSmithy(town, opts = {}) {
  const smithy = (opts[`newBuilding`] || createBuilding)(town, `smithy`)
  smithy.blacksmith = createBlacksmith(town, smithy)
  createSmithyName(town, smithy)
  Object.assign(smithy, {
    wordNoun: randomValue([`smithy`, `blacksmith`, `smithery`, `farrier shop`]),
    passageName: `SmithyOutput`,
    initPassage: `InitSmithy`,
    buildingType: `smithy`,
    associatedTown: town.name,
    weapons: [
      `dagger`,
      `long sword`,
      `short sword`,
      `morning star`,
      `mace`,
      `axe`,
      `greataxe`,
      `spear`,
      `falcheon`,
      `bastard sword`,
      `warhammer`,
      `iron crossbow`,
      `claymore`,
      `flail`,
      `broad sword`,
      `pike`,
      `scimitar`,
      `dart`,
      `rapier`,
      `trident`,
      `halberd`,
      `glaive`,
      `lance`,
      `war pick`,
    ],
    mundane: [
      `plows`,
      `rabbit traps`,
      `horseshoes`,
      `shovels`,
      `lamps`,
      `fire pokers`,
      `axes`,
      `hammers`,
      `pliers`,
      `steel couplings`,
      `trays`,
      `wheelbarrows`,
      `nails`,
      `pickaxes`,
      `hatchets`,
      `locks and keys`,
      `lockpicks`,
    ],
  })
  smithy.wealth = ``
  smithy.size = ``
  smithy.cleanliness = ``
  smithy.expertise = ``
  smithy.activity = ``
  structure.create(town, smithy)
  smithy.structure.smithyDescriptor = `${smithy.structure.material.wealth} ${smithy.structure.material.noun} ${smithy.wordNoun} with a ${smithy.structure.roof.verb} roof`

  const rollDataVariables = [`wealth`, `size`, `cleanliness`, `expertise`, `activity`]
  for (const propName of rollDataVariables) {
    defineRollDataGetter(smithy, smithy.rollData, propName)
  }

  smithy.notableFeature = `its ${smithy.expertise} weapons and armour`
  smithy.tippyDescription = `A ${smithy.size || smithy._size} ${smithy.wordNoun} that's ${smithy.cleanliness ||
    smithy._cleanliness}, and is known for ${smithy.notableFeature}.`

  return smithy
}
