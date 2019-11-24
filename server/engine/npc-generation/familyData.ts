import { randomRange } from "../rolls"
import { raceTraitsData } from "./npcData"
import { variables } from "../global"
import { Marriage } from "./createFamilyMembers"
import { rollFromTable } from "../tools/rollFromTable"
import { NPC } from "./npc"

export const familyData = {
  // These numbers are all made up, feel free to change them
  absencePercent: 74,
  oldAbsencePercent: 40,
  veryOldAbsencePercent: 70,

  orphanPercent: 10,
  marriagePercent: 55,
  remarriagePercent: 9,

  parentStageTable: [
    [55, `young adult`],
    [35, `settled adult`],
    [10, `elderly`],
  ],

  parentAge(npc: NPC) {
    const race = npc.race || `human`
    const parentStage = rollFromTable(familyData.parentStageTable, 100)
    const { baseAge, ageModifier } = raceTraitsData[race].ageTraits[parentStage]
    return npc.ageYears + baseAge + ageModifier()
  },

  siblingAge(npc: NPC) {
    const race = npc.race || `human`
    const { baseAge } = raceTraitsData[race].ageTraits[`young adult`]
    return npc.ageYears + randomRange(-baseAge, baseAge)
  },

  childAge(marriage: Marriage) {
    if (marriage.parents.length > 0) {
      // find the youngest parent
      const youngest = marriage.parents
        .map(key => variables.npcs[key])
        .reduce((npcA, npcB) => (npcA.ageYears <= npcB.ageYears ? npcA : npcB))
      return 2 * youngest.ageYears - familyData.parentAge(youngest)
    } else if (marriage.children.length > 0) {
      const sibling = variables.npcs[marriage.children[0]]
      return familyData.siblingAge(sibling)
    } else {
      return 0
    }
  },

  partnerAge(npc: NPC) {
    const race = npc.race || `human`
    const { baseAge } = raceTraitsData[race].ageTraits[`young adult`]
    return npc.ageYears + randomRange(-baseAge, baseAge)
  },

  siblingRoll() {
    const roll = randomRange(1, 5)

    switch (roll) {
      case 1:
        return 0
      case 2:
        return randomRange(1, 3)
      case 3:
        return randomRange(2, 5)
      case 4:
        return randomRange(3, 8)
      case 5:
        return randomRange(4, 11)
    }
  },

  relativeBase: (npc: NPC) => ({
    race: npc.race,
    family: npc.family,
    canBeCustom: false,
    isShallow: true,
    hasHistory: false,
  }),
}
