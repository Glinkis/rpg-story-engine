import { npcData } from "./npcData"
import { randomValue } from "../rolls"

export function createBackground(npc) {
  console.log(`assigning background traits to ${npc.name}...`)

  let backgroundOrigin
  let bond
  let ideal

  const traits = npcData.backgroundTraits

  if (typeof traits[npc.background] !== `undefined`) {
    backgroundOrigin = Array.isArray(traits[npc.background].backgroundOrigin)
      ? randomValue(traits[npc.background].backgroundOrigin)
      : randomValue(traits[`commoner`].backgroundOrigin)

    bond = Array.isArray(traits[npc.background].bond)
      ? randomValue(traits[npc.background].bond)
      : randomValue(traits[`commoner`].bond)

    ideal = Array.isArray(traits[npc.background].ideal)
      ? randomValue(traits[npc.background].ideal)
      : randomValue(traits[`commoner`].ideal)
  } else {
    console.log(`${npc.name}'s background of ${npc.background} was not valid.`)
    backgroundOrigin = randomValue(traits[`commoner`].backgroundOrigin)
    bond = randomValue(traits[`commoner`].bond)
  }

  npc.backgroundOrigin = npc.backgroundOrigin || backgroundOrigin
  npc.bond = npc.bond || bond
  npc.ideal = npc.ideal || ideal

  return npc
}
