import { createRelationship } from "../npc-generation/createRelationship"
import { createNPC } from "../npc-generation/createNPC"
import { toUpperFirst } from "../tools/toUpperFirst"
import { randomValue, randomRange } from "../rolls"
import { Smithy } from "./smithy"

export function createSmithyName(town, smithy: Smithy) {
  const smithyNameRoll = randomRange(1, 5)

  const adjective = randomValue([
    `Hard`,
    `Sharp`,
    `Pointy`,
    `Well-worn`,
    `Rusted`,
    `Shiny`,
    `Cold`,
    `Glowing`,
    `Heated`,
    `Golden`,
    `Silvered`,
    `Bronzed`,
    `Polished`,
    `Engraved`,
    `Jeweled`,
    `Plated`,
    `Eternal`,
    `Long-Lasting`,
    `Famed`,
  ])

  const noun = randomValue([
    `Iron`,
    `Metal`,
    `Gold`,
    `Silver`,
    `Bronze`,
    `Copper`,
    `Platinum`,
    `Electrum`,
    `Ingot`,
    `Tongs`,
    `Pliers`,
    `Anvil`,
    `Hammer`,
    `Forge`,
    `Bellows`,
    `Bucket`,
    `Steam`,
    `Smoke`,
    `Chimney`,
    `Flame`,
    `Fire`,
    `Magma`,
    `Coal`,
    `Crucible`,
  ])

  const family = randomValue([
    `son`,
    `daughter`,
    `brother`,
    `sister`,
    `uncle`,
    `aunt`,
    `father`,
    `friend`,
    `family`,
    `employee`,
  ])

  const rider = randomValue([
    `Shop`,
    `Blacksmith`,
    `Fabricator`,
    `Smith`,
    `Smithy`,
    `Farrier`,
    `Metalsmith`,
    `Swordsmith`,
  ])

  const fam = {
    son: {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.parentNoun,
      },
      gender: `man`,
      race: smithy.blacksmith.race,
      lastName: smithy.blacksmith.lastName,
      ageStage: `young adult`,
      profession: randomValue([
        `blacksmith`,
        `blacksmith's assistant`,
        `blacksmith's assistant`,
        `blacksmith's assistant`,
      ]),
    },
    daughter: {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.parentNoun,
      },
      gender: `woman`,
      race: smithy.blacksmith.race,
      lastName: smithy.blacksmith.lastName,
      ageStage: `young adult`,
      profession: randomValue([
        `blacksmith`,
        `blacksmith's assistant`,
        `blacksmith's assistant`,
        `blacksmith's assistant`,
      ]),
    },
    brother: {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.siblingNoun,
      },
      gender: `man`,
      race: smithy.blacksmith.race,
      lastName: smithy.blacksmith.lastName,
      ageStage: smithy.blacksmith.ageStage,
      profession: randomValue([
        `blacksmith`,
        `blacksmith's assistant`,
        `blacksmith's assistant`,
        `blacksmith's assistant`,
      ]),
    },
    sister: {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.siblingNoun,
      },
      gender: `woman`,
      race: smithy.blacksmith.race,
      lastName: smithy.blacksmith.lastName,
      ageStage: smithy.blacksmith.ageStage,
      profession: randomValue([
        `blacksmith`,
        `blacksmith's assistant`,
        `blacksmith's assistant`,
        `blacksmith's assistant`,
      ]),
    },
    uncle: {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.niblingNoun,
      },
      gender: `man`,
      race: smithy.blacksmith.race,
      lastName: smithy.blacksmith.lastName,
      ageStage: `settled adult`,
      profession: randomValue([
        `blacksmith`,
        `blacksmith's assistant`,
        `blacksmith's assistant`,
        `blacksmith's assistant`,
      ]),
    },
    aunt: {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.niblingNoun,
      },
      gender: `woman`,
      race: smithy.blacksmith.race,
      lastName: smithy.blacksmith.lastName,
      ageStage: `settled adult`,
      profession: randomValue([
        `blacksmith`,
        `blacksmith's assistant`,
        `blacksmith's assistant`,
        `blacksmith's assistant`,
      ]),
    },
    father: {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.childNoun,
      },
      gender: `man`,
      race: smithy.blacksmith.race,
      lastName: smithy.blacksmith.lastName,
      ageStage: `settled adult`,
      profession: randomValue([
        `blacksmith`,
        `blacksmith's assistant`,
        `blacksmith's assistant`,
        `blacksmith's assistant`,
      ]),
    },
    friend: {
      relationships: {
        [smithy.blacksmith.key]: `friend`,
      },
      ageStage: `settled adult`,
      profession: randomValue([
        `blacksmith`,
        `blacksmith's assistant`,
        `blacksmith's assistant`,
        `blacksmith's assistant`,
      ]),
    },
    family: {
      relationships: {
        [smithy.blacksmith.key]: `relative`,
      },
      lastName: smithy.blacksmith.lastName,
      race: smithy.blacksmith.race,
      ageStage: `settled adult`,
      profession: randomValue([
        `blacksmith`,
        `blacksmith's assistant`,
        `blacksmith's assistant`,
        `blacksmith's assistant`,
      ]),
    },
    employee: {
      relationships: {
        [smithy.blacksmith.key]: `employer`,
      },
      gender: `man`,
      profession: randomValue([
        `blacksmith`,
        `blacksmith's assistant`,
        `blacksmith's assistant`,
        `blacksmith's assistant`,
      ]),
    },
  }

  switch (smithyNameRoll) {
    case 1:
      smithy.name = `The ${adjective} ${noun}`
      break
    case 2:
      smithy.name = `${smithy.blacksmith.firstName} and ${toUpperFirst(family)}`
      smithy.assistant = createNPC(town, fam[family])
      createRelationship(
        town,
        smithy.blacksmith,
        smithy.assistant,
        family,
        smithy.assistant.relationships[smithy.blacksmith.key]
      )
      break
    case 3:
      smithy.name = `The ${noun} and ${toUpperFirst(family)}`
      smithy.assistant = createNPC(town, fam[family])
      createRelationship(
        town,
        smithy.blacksmith,
        smithy.assistant,
        family,
        smithy.assistant.relationships[smithy.blacksmith.key]
      )
      break
    case 4:
      smithy.name = `The ${adjective} ${rider}`
      break
    case 5:
      smithy.name = `${adjective} ${noun}`
      break
    default:
      smithy.name = `The ${adjective} Smithy`
  }

  return smithy
}
