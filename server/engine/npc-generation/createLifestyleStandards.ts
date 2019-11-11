import { randomValue } from "../rolls"
import { findProfession } from "./findProfession"
import { Marriage } from "./createFamilyMembers"
import { rollFromTable } from "../tools/rollFromTable"
import { toUpperFirst } from "../tools/toUpperFirst"

const lifestyleTables: Record<string, [number, string][]> = {
  "aristocracy": [
    [5, `comfortable`],
    [15, `wealthy`],
    [80, `aristocratic`],
  ],
  "nobility": [
    [5, `modest`],
    [30, `comfortable`],
    [60, `wealthy`],
    [5, `aristocratic`],
  ],
  "commoner": [
    [5, `poor`],
    [45, `modest`],
    [45, `comfortable`],
    [5, `wealthy`],
  ],
  "peasantry": [
    [5, `squalid`],
    [60, `poor`],
    [30, `modest`],
    [5, `comfortable`],
  ],
  "paupery": [
    [5, `wretched`],
    [75, `squalid`],
    [15, `poor`],
    [5, `modest`],
  ],
  "indentured servitude": [
    [95, `wretched`],
    [5, `squalid`],
  ],
}

const homeBiases: Record<string, number> = {
  aristocratic: 40,
  wealthy: 20,
  comfortable: 10,
  modest: 0,
  poor: -10,
  squalid: -20,
  wretched: -40,
}

const homeTable: [number, string][] = [
  [0, `on the streets`], // unreachable without biases
  [20, `a rundown shack`],
  [10, `no real permanent address`],
  [5, `a village in the middle of the wilderness`],
  [5, `an encampment`],
  [10, `an apartment in a rundown neighborhood`],
  [20, `a small house`],
  [20, `a large house`],
  [20, `a mansion`],
  [40, `a palace`], // unreachable without biases
]

export function createLifestyleStandards(town: any, npc: any) {
  console.groupCollapsed(`Creating living standards for ${npc.name}`)
  const isCurrently = randomValue([`has been`, `has recently been`, `is`, `is currently`])
  const isHaving = randomValue([`has been having`, `has recently had`, `is having`, `is currently having`])
  const desc = findProfession(town, npc)
  const tippy = `<span id=${JSON.stringify(npc.firstName)} class=tip title=${JSON.stringify(
    toUpperFirst(desc.description)
  )}><b>${npc.dndClass}</b></span>`

  const wageVarianceNotes: [number, string][] = [
    [-25, `${isCurrently} impossibly unsuccessful as a ${tippy}`],
    [-18, `${isCurrently} incredibly unsuccessful as a ${tippy}`],
    [-12, `${isCurrently} unsuccessful as a ${tippy}`],
    [-8, `${isCurrently} somewhat unsuccessful as a ${tippy}`],
    [-5, `${isCurrently} slightly unsuccessful as a ${tippy}`],
    [0, `is a ${tippy}`],
    [5, randomValue([`${isCurrently} mildly successful as a `, `${isHaving} mild success as a`]) + tippy],
    [8, randomValue([`${isCurrently} reasonably successful as a `, `${isHaving} reasonable success as a `]) + tippy],
    [8, randomValue([`${isCurrently} modestly successful as a `, `${isHaving} modest success as a `]) + tippy],
    [12, randomValue([`${isCurrently} successful as a `, `${isHaving} success as a `]) + tippy],
    [12, randomValue([`${isCurrently} fabulously successful as a `, `${isHaving} fabulous success as a `]) + tippy],
    [25, randomValue([`${isCurrently} extremely successful as a `, `${isHaving} extreme success as a `]) + tippy],
  ]

  const note = wageVarianceNotes.find(function(desc) {
    return desc[0] >= npc.roll.wageVariation(town)
  })

  npc.professionSuccess = (note && `${npc.firstName} ${note[1]}`) || wageVarianceNotes[5][1]

  console.groupEnd()

  return npc
}

export function createFamilyLifestyle(marriage: Marriage) {
  if (marriage.socialClass && marriage.lifestyle) {
    const lifestyle = rollFromTable(lifestyleTables[marriage.socialClass], 100)
    const home = rollFromTable(homeTable, 100, homeBiases[marriage.lifestyle])
    return Object.assign(marriage, { lifestyle, home })
  }
}
