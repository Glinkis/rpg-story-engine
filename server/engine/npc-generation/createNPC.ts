import { npcData, raceTraitsData } from "./npcData"
import { bodyParts } from "./bodyParts"
import { genderData } from "./genderData"
import { objectArrayFetcher } from "../tools/objectArrayFetcher"
import { randomRange, randomValue, dice, random } from "../rolls"
import { misc } from "../world/miscData"
import { createUniqueKey } from "../tools/createUniqueKey"
import { calcPercentage } from "../tools/calcPercentage"
import { toUpperFirst } from "../tools/toUpperFirst"
import { createSexuality } from "./createSexuality"
import { createClass } from "./createClass"
import { fetchRace } from "./fetchRace"
import { fetchProfessionChance } from "./fetchProfessionChance"
import { lifestyleStandards } from "../town/lifestyleStandards"
import { findProfession } from "./findProfession"
import { createAge } from "./createAge"
import { createRace } from "./createRace"
import { createSocialClass } from "./createSocialClass"
import { createLifestyleStandards } from "./createLifestyleStandards"
import { variables } from "../global"
import { createDescriptors } from "./createDescriptors"
import { createBackground } from "./createBackground"
import { Town } from "../town/town"
import { taxRate } from "../town/createTown"
import { NPC } from "./npc"

export function createNPC(town: Town, base?: any) {
  if (!town) {
    throw new Error(`Town is not defined! NPC cannot be created. Please report this bug.`)
  }
  // These are the very basic bits that need to be defined first- race, gender, and then names using those local variables.

  if (!base) {
    base = {
      isShallow: true,
    }
  }

  if (base.isShallow === true) {
    base.isThrowaway = base.isThrowaway || true
    base.hasHistory = base.hasHistory || false
  }

  if (base.canBeCustom === true && randomRange(1, 100) > 99) {
    base = objectArrayFetcher(misc.patreonCharacters, town)
  }

  const gender = base.gender || randomValue([`man`, `woman`])
  const race = base.race || fetchRace(town, base)
  const raceTraits = raceTraitsData[race]

  const profession = base.profession || fetchProfessionChance(town, base)

  const firstName = base.firstName || toUpperFirst(randomValue(raceTraitsData[race].genderTraits[gender].firstName))
  const lastName = base.lastName || toUpperFirst(randomValue(raceTraitsData[race].lastName))
  const ageStage =
    base.ageStage ||
    randomValue([
      `young adult`,
      `young adult`,
      `young adult`,
      `young adult`,
      `settled adult`,
      `settled adult`,
      `settled adult`,
      `elderly`,
    ])
  const dndClass = base.dndClass || randomValue(npcData.dndClass)
  if (base.dndClass) {
    base.hasClass = true
  }

  // the local variables are then assigned to npc. We don't need to initialise npc to do the stuff that's race & gender dependent because we've got the local variables.
  const npc = {
    key: createUniqueKey(),
    passageName: `NPCProfile`,
    gender,
    race,
    firstName,
    lastName,
    get name() {
      return `${this.firstName} ${this.lastName}`
    },
    set name(name) {
      const words = name.toString().split(` `)
      this.firstName = words[0] || ``
      this.lastName = words[1] || ``
    },
    ageStage,
    ageYears: raceTraits.ageTraits[ageStage].baseAge + raceTraits.ageTraits[ageStage].ageModifier(),
    muscleMass: raceTraits.muscleMass + dice(5, 4) - 12,
    calmTrait: randomValue(npcData.calmTrait),
    stressTrait: randomValue(npcData.stressTrait),
    relationships: {},
    roll: {
      _wageVariation: dice(5, 10) - 27,
      wageVariation(town: Town) {
        // _wageVariation is static; it's the "luck" that the NPC has in their profession.
        // town.roll.wealth increases or decreases it by 10%, reflecting the strength of the economy.
        // expected range should be between -25 and 25.
        return calcPercentage(npc.roll._wageVariation, (town.roll.wealth - 50) / 5)
      },
    },
    hairColour: randomValue(npcData.hairColour),
    hairType: randomValue(npcData.hairType),
    get hair() {
      return `${this.hairType} ${this.hairColour} hair`
    },
    set hair(hair) {
      const hairs = hair.toString().split(` `)
      this.hairType = hairs[0] || ``
      this.hairColour = hairs[1] || ``
    },
    get descriptor() {
      return randomValue(this.descriptors)
    },
    set descriptorsAdd(description: string) {
      if (typeof description === `string`) {
        if (this.descriptors.includes(description)) {
          console.log(`Throwing out duplicate description...`)
        } else {
          this.descriptors.push(description)
        }
      } else {
        console.log(`Expected a string operand and received ${description}`)
      }
    },
    eyes: randomValue(raceTraitsData[race].eyes),
    skinColour: randomValue(npcData.skinColour),
    dndClass,
    profession,
    pockets: randomValue(npcData.pockets),
    wealth: dice(2, 50),
    trait: randomValue(npcData.trait),
    currentMood: randomValue(npcData.currentMood),
    hasHistory: base.hasHistory || false,
    // id: Math.floor(randomFloat(1) * 0x10000),
    idle: randomValue(npcData.idle),

    get raceNote(): any {
      if (this.race === `human`) {
        return `${this.height} ${this.gender}`
      } else {
        return raceTraitsData[this.race].raceWords.raceName
      }
    },
    knownLanguages: raceTraitsData[race].knownLanguages,
    reading: randomValue(npcData.reading),

    family: undefined,
    ...base,
  }

  Object.assign(npc, genderData[npc.gender])
  Object.assign(npc, raceTraitsData[npc.race].raceWords)

  if (npc.hasClass === undefined) {
    if (random(100) > 70) {
      npc.hasClass = false
      npc.dndClass = npc.profession
    } else {
      npc.adventure = randomValue(npcData.adventure) || `looking for work`
      npc.hasClass = true
    }
  } else if (!npc.hasClass) {
    npc.dndClass = npc.profession
  } else {
    npc.adventure = randomValue(npcData.adventure) || `looking for work`
  }

  if (!npc.vocalPattern) {
    if (dice(2, 50) >= 75) {
      npc.vocalPattern = randomValue(npcData.vocalPattern)
    }
  }

  createAge(npc)
  createRace(npc)

  // This sets up the physical traits of NPCs
  const hair = randomValue(bodyParts.head.hair)
  const eyes = randomValue(bodyParts.head.eyes)
  const nose = randomValue(bodyParts.head.nose)
  const mouth = randomValue(bodyParts.head.mouth)
  const chin = randomValue(bodyParts.head.chin)
  const ears = randomValue(bodyParts.head.ears)
  const headMisc = randomValue(bodyParts.head.misc)
  const torso = randomValue(bodyParts.torso.descriptions)
  const arms = randomValue(bodyParts.arms.descriptions)
  const legs = randomValue(bodyParts.legs.descriptions)

  const physicalTraitRoll = randomRange(1, 100)

  if (physicalTraitRoll > 40) {
    npc.physicalTrait = npc.physicalTrait || randomValue([hair, eyes, nose, mouth, chin, ears, headMisc])
  } else if (physicalTraitRoll > 30) {
    npc.physicalTrait = npc.physicalTrait || torso
  } else if (physicalTraitRoll > 20) {
    npc.physicalTrait = npc.physicalTrait || arms
  } else if (physicalTraitRoll > 13) {
    npc.physicalTrait = npc.physicalTrait || legs
  } else if (physicalTraitRoll > 8) {
    npc.physicalTrait = npc.physicalTrait || randomValue(npcData.scar)
  } else if (physicalTraitRoll > 5) {
    npc.physicalTrait = npc.physicalTrait || npc.hair
  } else {
    npc.physicalTrait = npc.physicalTrait || randomValue(npcData.tattoo)
  }

  createClass(npc)
  createBackground(npc)
  createDescriptors(npc)

  npc.formalName = npc.formalName || `${npc.title} ${npc.lastName}`

  if (!npc.keyIsAlreadyDefined) {
    variables.npcs[npc.key] = npc
  }

  npc.profile = (npc: any, base: any) => {
    base = npc.name || base
    return `<<profile \`$npcs[${JSON.stringify(npc.key)}] \`${JSON.stringify(base)}>>`
  }

  createSexuality(npc)
  createSocialClass(town, npc)
  createLifestyleStandards(town, npc)

  if (npc.callbackFunction) {
    npc.callbackFunction(town, npc, base)
  }

  console.groupEnd()
  return npc
}

export function availableLanguages(npc: NPC) {
  return npcData.standardLanguages.concat(npcData.exoticLanguages).filter(language => {
    return !npc.knownLanguages.includes(language)
  })
}

export function lifestyleStandard(town: Town, npc: NPC) {
  const income = netIncome(town, npc)
  for (const lifestyleStandard of lifestyleStandards) {
    if (income >= lifestyleStandard[0]) {
      return lifestyleStandard
    }
  }
  // lifestyleStandard returns the unmodified array of [100, 'modest', 30]
  // various bits use all three, so it was easier to specify which than create three virtually identical functions.
  return lifestyleStandard[3]
}

export function grossIncome(town: Town, npc: NPC) {
  // TODO add hobbies
  const profession = findProfession(town, npc)
  return Math.round(calcPercentage(profession.dailyWage, [npc.roll.wageVariation(town), (town.roll.wealth - 50) / 3]))
}

export function netIncome(town: Town, npc: NPC) {
  return Math.round(calcPercentage(grossIncome(town, npc), -taxRate(town)))
}

export function lifestyleExpenses(town: Town, npc: NPC) {
  const income = grossIncome(town, npc)
  const living = lifestyleStandard(town, npc)
  const ratio = lifestyleStandards.find(desc => desc[1] === living[1])
  return (ratio && Math.round(income * (ratio?.[2] / 100))) || 0
}

export function profit(town: Town, npc: NPC) {
  return Math.round(netIncome(town, npc) - lifestyleStandard(town, npc)[0] - lifestyleExpenses(town, npc))
}
