import { Gender } from "../../../shared/Gender"
import { AgeStage } from "../../../shared/AgeStage"
import { createRelationship } from "../npc-generation/createRelationship"
import { createNPC } from "../npc-generation/createNPC"
import { toUpperFirst } from "../tools/toUpperFirst"
import { randomValue, randomRange } from "../rolls"
import { Smithy } from "./smithy"
import { Town } from "../town/town"

export function createSmithyName(town: Town, smithy: Smithy) {
  const { blacksmith } = smithy

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
        [blacksmith.key]: blacksmith.parentNoun,
      },
      gender: Gender.Man,
      race: blacksmith.race,
      lastName: blacksmith.lastName,
      ageStage: AgeStage.YoungAdult,
      profession: getProfession(),
    },
    daughter: {
      relationships: {
        [blacksmith.key]: blacksmith.parentNoun,
      },
      gender: Gender.Woman,
      race: blacksmith.race,
      lastName: blacksmith.lastName,
      ageStage: AgeStage.YoungAdult,
      profession: getProfession(),
    },
    brother: {
      relationships: {
        [blacksmith.key]: blacksmith.siblingNoun,
      },
      gender: Gender.Man,
      race: blacksmith.race,
      lastName: blacksmith.lastName,
      ageStage: blacksmith.ageStage,
      profession: getProfession(),
    },
    sister: {
      relationships: {
        [blacksmith.key]: blacksmith.siblingNoun,
      },
      gender: Gender.Woman,
      race: blacksmith.race,
      lastName: blacksmith.lastName,
      ageStage: blacksmith.ageStage,
      profession: getProfession(),
    },
    uncle: {
      relationships: {
        [blacksmith.key]: blacksmith.niblingNoun,
      },
      gender: Gender.Man,
      race: blacksmith.race,
      lastName: blacksmith.lastName,
      ageStage: AgeStage.SettledAdult,
      profession: getProfession(),
    },
    aunt: {
      relationships: {
        [blacksmith.key]: blacksmith.niblingNoun,
      },
      gender: Gender.Woman,
      race: blacksmith.race,
      lastName: blacksmith.lastName,
      ageStage: AgeStage.SettledAdult,
      profession: getProfession(),
    },
    father: {
      relationships: {
        [blacksmith.key]: blacksmith.childNoun,
      },
      gender: Gender.Man,
      race: blacksmith.race,
      lastName: blacksmith.lastName,
      ageStage: AgeStage.SettledAdult,
      profession: getProfession(),
    },
    friend: {
      relationships: {
        [blacksmith.key]: `friend`,
      },
      ageStage: AgeStage.SettledAdult,
      profession: getProfession(),
    },
    family: {
      relationships: {
        [blacksmith.key]: `relative`,
      },
      lastName: blacksmith.lastName,
      race: blacksmith.race,
      ageStage: AgeStage.SettledAdult,
      profession: getProfession(),
    },
    employee: {
      relationships: {
        [blacksmith.key]: `employer`,
      },
      gender: Gender.Man,
      profession: getProfession(),
    },
  }

  switch (smithyNameRoll) {
    case 1:
      smithy.name = `The ${adjective} ${noun}`
      break
    case 2:
      smithy.name = `${blacksmith.firstName} and ${toUpperFirst(family)}`
      smithy.assistant = createNPC(town, fam[family])
      createRelationship(town, blacksmith, smithy.assistant, family, smithy.assistant.relationships[blacksmith.key])
      break
    case 3:
      smithy.name = `The ${noun} and ${toUpperFirst(family)}`
      smithy.assistant = createNPC(town, fam[family])
      createRelationship(town, blacksmith, smithy.assistant, family, smithy.assistant.relationships[blacksmith.key])
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

function getProfession() {
  return randomValue([`blacksmith`, `blacksmith's assistant`, `blacksmith's assistant`, `blacksmith's assistant`])
}
