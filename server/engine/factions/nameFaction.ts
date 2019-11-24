import { randomValue } from "../rolls"
import { factionData } from "./factionData"
import { rt } from "../tools/randomTemplate"

type FactionType = keyof typeof factionData.type

export function nameFaction(town: string, type: string) {
  const data = factionData.type[type as FactionType]
  const { group, adjective, main, unique } = data

  const names = [
    rt`The ${group} of ${adjective} ${main}`,
    rt`The ${group} of ${main}`,
    rt`The ${adjective} ${group}`,
    rt`The ${main} of ${town}`,
    rt`The ${town} ${main}`,
    rt`${unique}`,
  ]

  return randomValue(names)
}
