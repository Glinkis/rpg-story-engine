import { Gender } from "../../../shared/Gender"
import { AgeStage } from "../../../shared/AgeStage"
import { createRelationship } from "../npc-generation/createRelationship"
import { createNPC } from "../npc-generation/createNPC"
import { toUpperFirst } from "../tools/toUpperFirst"
import { randomValue, randomRange } from "../rolls"
import { Smithy } from "./smithy"
import { Town } from "../town/town"

export function createSmithyName(town: Town, smithy: Smithy) {
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
      gender: Gender.Man,
      race: smithy.blacksmith.race,
      lastName: smithy.blacksmith.lastName,
      ageStage: AgeStage.YoungAdult,
      profession: getProfession(),
    },
    daughter: {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.parentNoun,
      },
      gender: Gender.Woman,
      race: smithy.blacksmith.race,
      lastName: smithy.blacksmith.lastName,
      ageStage: AgeStage.YoungAdult,
      profession: getProfession(),
    },
    brother: {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.siblingNoun,
      },
      gender: Gender.Man,
      race: smithy.blacksmith.race,
      lastName: smithy.blacksmith.lastName,
      ageStage: smithy.blacksmith.ageStage,
      profession: getProfession(),
    },
    sister: {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.siblingNoun,
      },
      gender: Gender.Woman,
      race: smithy.blacksmith.race,
      lastName: smithy.blacksmith.lastName,
      ageStage: smithy.blacksmith.ageStage,
      profession: getProfession(),
    },
    uncle: {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.niblingNoun,
      },
      gender: Gender.Man,
      race: smithy.blacksmith.race,
      lastName: smithy.blacksmith.lastName,
      ageStage: AgeStage.SettledAdult,
      profession: getProfession(),
    },
    aunt: {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.niblingNoun,
      },
      gender: Gender.Woman,
      race: smithy.blacksmith.race,
      lastName: smithy.blacksmith.lastName,
      ageStage: AgeStage.SettledAdult,
      profession: getProfession(),
    },
    father: {
      relationships: {
        [smithy.blacksmith.key]: smithy.blacksmith.childNoun,
      },
      gender: Gender.Man,
      race: smithy.blacksmith.race,
      lastName: smithy.blacksmith.lastName,
      ageStage: AgeStage.SettledAdult,
      profession: getProfession(),
    },
    friend: {
      relationships: {
        [smithy.blacksmith.key]: `friend`,
      },
      ageStage: AgeStage.SettledAdult,
      profession: getProfession(),
    },
    family: {
      relationships: {
        [smithy.blacksmith.key]: `relative`,
      },
      lastName: smithy.blacksmith.lastName,
      race: smithy.blacksmith.race,
      ageStage: AgeStage.SettledAdult,
      profession: getProfession(),
    },
    employee: {
      relationships: {
        [smithy.blacksmith.key]: `employer`,
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

function getProfession() {
  return randomValue([`blacksmith`, `blacksmith's assistant`, `blacksmith's assistant`, `blacksmith's assistant`])
}
