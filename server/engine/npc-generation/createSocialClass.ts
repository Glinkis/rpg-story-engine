import { findProfession } from "./findProfession"
import { dice, randomRange } from "../rolls"
import { clamp } from "../math"
import { variables } from "../global"
import { Marriage } from "./createFamilyMembers"

const socialClasses = [
  [195, `aristocracy`, 5],
  [95, `aristocracy`, 5],
  [80, `nobility`, 4],
  [60, `commoner`, 3],
  [20, `peasantry`, 2],
  [10, `paupery`, 1],
  [0, `indentured servitude`, 0],
]

const socialClassArray = [`indentured servitude`, `paupery`, `peasantry`, `commoner`, `nobility`, `aristocracy`]

export function createSocialClass(town: any, npc: any) {
  console.log(`Creating social class...`)

  if (!npc.roll) {
    npc.roll = {}
  }
  const profession = findProfession(town, npc)

  npc.roll.socialClass = npc.roll.socialClass || profession.socialClassRoll || 40 + dice(8, 6)

  console.log({ npc })
  if (!npc.socialClass) {
    console.log(`Social class not predefined. Searching for the social class of a ${npc.profession}...`)
    // if .socialClass is defined in the professions.js, then that's all dandy.
    if (profession.socialClass) {
      npc.socialClass = profession.socialClass
      return npc
      // otherwise, just roll some dice.
    } else {
      console.log(`No synonyms found for ${npc.dndClass}`)
      const array = socialClasses.find(desc => {
        return desc[0] <= npc.roll.socialClass
      })
      npc.socialClass = array && array[1]
      console.log(`Unidentified profession- ${npc.profession} does not exist in townData.professions!`)
    }
  }
  if (npc.socialClass === undefined) {
    console.log(`Failed to set a social class that matched the roll of ${npc.roll.socialClass} for ${npc.name}.`)
    npc.socialClass = socialClasses[randomRange(0, socialClasses.length - 1)]
  }
  return npc
}

// Introduce modifiers for adult family members.
const adultSocialMobilityTable: [number, number][] = [[6, -2], [18, -1], [60, 0], [14, 1], [2, 2]]

export function relativeSocialClass(npcClass: string) {
  let classIndex = socialClassArray.indexOf(npcClass)
  if (classIndex < 0) classIndex = 3

  const delta = rollFromTable(adultSocialMobilityTable, 100)

  const newIndex = clamp(classIndex + delta, 0, socialClassArray.length - 1)
  return socialClassArray[newIndex]
}

export function familySocialClass(marriage: Marriage) {
  if (marriage.parents.length === 0) {
    if (marriage.children.length === 0) {
      return `commoner`
    } else {
      return variables.npcs[marriage.children[0]].socialClass
    }
  } else {
    const classArray = marriage.parents.map(key => {
      return socialClassArray.indexOf(variables.npcs[key].socialClass)
    })

    const mean = Math.round(classArray.reduce((a, b) => a + b) / classArray.length)
    return socialClassArray[mean]
  }
}
