import { npcData } from "./npcData"
import { randomValue } from "../rolls"
import { NPC } from "./npc"

export function createClass(npc: NPC) {
  let dndClassOrigin: string
  let background: string
  let classWeapon: string

  const classTraits = npcData.classTraits[npc.dndClass]
  const professionTraits = npcData.professionTraits[npc.profession]

  if (npc.hasClass !== false && classTraits !== undefined) {
    dndClassOrigin = Array.isArray(classTraits.dndClassOrigin)
      ? randomValue(classTraits.dndClassOrigin)
      : Array.isArray(professionTraits.dndClassOrigin)
      ? randomValue(professionTraits.dndClassOrigin)
      : `My circumstances kept me from doing more than being a ${npc.profession}`

    background = Array.isArray(classTraits.background)
      ? randomValue(classTraits.background)
      : Array.isArray(professionTraits.background)
      ? randomValue(professionTraits.background)
      : `commoner`

    classWeapon = Array.isArray(classTraits.weapon)
      ? randomValue(classTraits.weapon)
      : Array.isArray(professionTraits.weapon)
      ? randomValue(professionTraits.weapon)
      : `a dagger`
  } else if (npc.hasClass === false && professionTraits !== undefined) {
    dndClassOrigin = Array.isArray(professionTraits.dndClassOrigin)
      ? randomValue(professionTraits.dndClassOrigin)
      : `My circumstances kept me from doing more than being a ${npc.profession}`

    // prettier-ignore
    background = Array.isArray(professionTraits.background)
      ? randomValue(professionTraits.background)
      : `commoner`

    // prettier-ignore
    classWeapon = Array.isArray(professionTraits.weapon)
      ? randomValue(professionTraits.weapon)
      : `a dagger`
  } else {
    console.log(`${npc.name} the ${npc.dndClass} did not have a valid class.`)
    dndClassOrigin = `My circumstances kept me from doing more than being a ${npc.profession}`
    background = `commoner`
    classWeapon = `a dagger`
  }

  npc.dndClassOrigin = npc.dndClassOrigin || dndClassOrigin
  npc.background = npc.background || background
  npc.weapon = npc.weapon || classWeapon

  return npc
}
