import { randomValue } from "../rolls"
import { factionData } from "./factionData"

export function nameFaction(town: string, type: string) {
  const data = factionData.type[type]

  const name = randomValue([
    `The ${randomValue(data.group)} of ${randomValue(data.adjective)} ${randomValue(data.main)}`,
    `The ${randomValue(data.group)} of ${randomValue(data.main)}`,
    `The ${randomValue(data.adjective)} ${randomValue(data.group)}`,
    `The ${randomValue(data.main)} of ${town}`,
    `The ${town} ${randomValue(data.main)}`,
    randomValue(data.unique),
  ])

  return name
}
