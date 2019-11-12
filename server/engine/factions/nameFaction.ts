import { randomValue } from "../rolls"
import { factionData } from "./factionData"
import { rt } from "../tools/randomTemplate"

type FactionType = keyof typeof factionData.type

export function nameFaction(town: string, type: string) {
  const data = factionData.type[type as FactionType]

  const name = randomValue([
    rt`The ${data.group} of ${data.adjective} ${data.main}`,
    rt`The ${data.group} of ${data.main}`,
    rt`The ${data.adjective} ${data.group}`,
    rt`The ${data.main} of ${town}`,
    rt`The ${town} ${data.main}`,
    rt`${data.unique}`,
  ])

  return name
}
