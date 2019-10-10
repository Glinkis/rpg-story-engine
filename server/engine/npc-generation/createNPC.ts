import { npcData } from "./npcData"
import { objectArrayFetcher } from "../tools/objectArrayFetcher"
import { randomRange, randomValue, dice, random } from "../rolls"
import { misc } from "../world/miscData"
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

export function createNPC(town: any, base?: any) {
  if (!town) {
    console.error(`Town is not defined! NPC cannot be created. Please report this bug.`)
  }
  console.log(`Base:`, { base })
  // These are the very basic bits that need to be defined first- race, gender, and then names using those local variables.

  if (!base) {
    base = {
      isShallow: true,
    }
  }

  if (base.isShallow === true) {
    console.log(`NPC flagged as shallow.`)
    base.isThrowaway = base.isThrowaway || true
    base.hasHistory = base.hasHistory || false
  }

  if (base.canBeCustom === true && randomRange(1, 100) > 99) {
    base = objectArrayFetcher(misc.patreonCharacters, town)
  }

  const gender = base.gender || randomValue([`man`, `woman`])
  const race = base.race || fetchRace(town, base)
  console.log(`Loading profession:`)
  const profession = base.profession || fetchProfessionChance(town, base)

  const firstName = base.firstName || toUpperFirst(randomValue(npcData.raceTraits[race].genderTraits[gender].firstName))
  const lastName = base.lastName || toUpperFirst(randomValue(npcData.raceTraits[race].lastName))
  console.groupCollapsed(`${firstName} ${lastName}`)
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

  const raceTraits = npcData.raceTraits[race]

  // the local variables are then assigned to npc. We don't need to initialise npc to do the stuff that's race & gender dependent because we've got the local variables.
  const npc = {
    key: Math.random(),
    passageName: `NPCProfile`,
    _gender: gender,
    _race: race,
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
    pronouns: {},
    relationships: {},
    roll: {
      _wageVariation: dice(5, 10) - 27,
      wageVariation(town: any) {
        // _wageVariation is static; it's the "luck" that the NPC has in their profession.
        // town.roll.wealth increases or decreases it by 10%, reflecting the strength of the economy.
        // expected range should be between -25 and 25.
        return calcPercentage(npc.roll._wageVariation, (town.roll.wealth - 50) / 5)
      },
    },
    finances: {
      grossIncome(town: any, npc: any) {
        // TODO add hobbies
        console.log(`Returning ${npc.name}'s gross income...`)
        const profession = findProfession(town, npc)
        return Math.round(
          calcPercentage(profession.dailyWage, [npc.roll.wageVariation(town), (town.roll.wealth - 50) / 3])
        )
      },
      netIncome(town: any, npc: any) {
        console.log(`Returning ${npc.name}'s net income...`)
        return Math.round(calcPercentage(npc.finances.grossIncome(town, npc), -town.taxRate(town)))
      },
      lifestyleStandard(town: any, npc: any) {
        console.log(`Returning ${npc.name}'s lifestyle standard...`)
        const income = npc.finances.netIncome(town, npc)
        for (const lifestyleStandard of lifestyleStandards) {
          if (income >= lifestyleStandard[0]) {
            return lifestyleStandard
          }
        }
        // lifestyleStandard returns the unmodified array of [100, 'modest', 30]
        // various bits use all three, so it was easier to specify which than create three virtually identical functions.
        return
      },
      lifestyleExpenses(town: any, npc: any) {
        console.log(`Returning ${npc.name}'s lifestyle expenses...`)
        const income = npc.finances.grossIncome(town, npc)
        const living = npc.finances.lifestyleStandard(town, npc)
        const ratio = lifestyleStandards.find(desc => desc[1] === living[1])
        return ratio && Math.round(income * (ratio[2] / 100))
      },
      profit(town: any, npc: any) {
        console.log(`Returning ${npc.name}'s profit...`)
        return Math.round(
          npc.finances.netIncome(town, npc) -
            npc.finances.lifestyleStandard(town, npc)[0] -
            npc.finances.lifestyleExpenses(town, npc)
        )
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
    get descriptor(): any {
      return randomValue(this.descriptors)
    },
    set descriptorsAdd(description: any) {
      if (typeof description === `string`) {
        console.log(this.descriptors)
        if (this.descriptors.includes(description)) {
          console.log(`Throwing out duplicate description...`)
        } else {
          this.descriptors.push(description)
        }
      } else {
        console.log(`Expected a string operand and received ${description}`)
      }
    },
    eyes: randomValue(npcData.raceTraits[race].eyes),
    skinColour: randomValue(npcData.skinColour),
    dndClass,
    profession,
    pockets: randomValue(npcData.pockets),
    wealth: dice(2, 50),
    trait: randomValue(npcData.trait),
    currentMood: npcData.currentMood,
    hasHistory: base.hasHistory || false,
    // id: Math.floor(randomFloat(1) * 0x10000),
    idle: npcData.idle,
    get gender() {
      return this._gender
    },
    set gender(gender) {
      this._gender = gender
      Object.assign(this, npcData.gender[gender])
    },
    get race() {
      return this._race
    },
    set race(race) {
      this._race = race
      Object.assign(this, npcData.raceTraits[race].raceWords)
    },
    get raceNote(): any {
      if (this._race === `human`) {
        return `${this.height} ${this.gender}`
      } else {
        return npcData.raceTraits[this._race].raceWords.raceName
      }
    },
    knownLanguages: npcData.raceTraits[race].knownLanguages,
    reading: randomValue(npcData.reading),

    family: undefined,
    ...base,
  }

  npc.gender = npc.gender || npc._gender
  npc.race = npc.race || npc._race

  Object.assign(npc, npcData.gender[npc.gender])
  Object.assign(npc.pronouns, npcData.gender[npc.gender])
  Object.assign(npc, npcData.raceTraits[npc.race].raceWords)

  npc.availableLanguages = [npcData.standardLanguages.concat(npcData.exoticLanguages) - npc.knownLanguages]

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
  const hair = randomValue(npcData.bodyParts.head.hair)
  const eyes = randomValue(npcData.bodyParts.head.eyes)
  const nose = randomValue(npcData.bodyParts.head.nose)
  const mouth = randomValue(npcData.bodyParts.head.mouth)
  const chin = randomValue(npcData.bodyParts.head.chin)
  const ears = randomValue(npcData.bodyParts.head.ears)
  const headMisc = randomValue(npcData.bodyParts.head.misc)
  const torso = randomValue(npcData.bodyParts.torso.descriptions)
  const arms = randomValue(npcData.bodyParts.arms.descriptions)
  const legs = randomValue(npcData.bodyParts.legs.descriptions)

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

  if (npc.hasHistory !== false) {
    // TODO: setup.ExpandNPC(town, npc)
  }

  // TODO: State.temporary.newNPC = npc

  if (npc.callbackFunction) {
    npc.callbackFunction(town, npc, base)
  }

  console.log(npc)
  console.groupEnd()
  return npc
}
