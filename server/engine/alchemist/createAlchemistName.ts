import { dice, randomValue } from "../rolls"

export function createAlchemistName(chemistFirstName: string) {
  const adjective = randomValue(ADJECTIVES)
  const noun = randomValue(NOUNS)
  const rider = randomValue(RIDERS)

  switch (dice(1, 6)) {
    case 1:
      return `The ${adjective} ${noun}`
    case 2:
      return `${chemistFirstName} and ${adjective}`
    case 3:
      return `The ${noun} and ${adjective}`
    case 4:
      return `The ${adjective} ${rider}`
    case 5:
      return `${adjective} ${noun}`
    case 6:
      return `The ${adjective} Alchemist`
  }

  throw new RangeError(`Rolled out of range!`)
}

const ADJECTIVES = [
  `Bubbling`,
  `Spicy`,
  `Soggy`,
  `Fizzy`,
  `Liquid`,
  `Fluorescent`,
  `Clear`,
  `Alcoholic`,
  `Abyssal`,
  `Angelic`,
  `Elven`,
  `Measured`,
  `Marked`,
  `Glass`,
  `Glass`,
  `Copper`,
  `Corked`,
  `Burning`,
  `Red`,
  `Blue`,
  `Green`,
  `Gold`,
  `Yellow`,
  `Vile`,
  `Genuine`,
  `Original`,
]

const NOUNS = [
  `Potion`,
  `Liquid`,
  `Fumes`,
  `Bottle`,
  `Vial`,
  `Firewater`,
  `Mortar and Pestle`,
  `Lab`,
  `Laboratory`,
  `Chemist`,
  `Alchemist`,
  `Brewer`,
  `Lotion`,
  `Wishes`,
]

const RIDERS = [
  `Chemist`,
  `Alchemist`,
  `Potion Shop`,
  `Potionery`,
  `Ointmentary`,
  `Juice Bar`,
  `Lab`,
  `Laboratory`,
  `Secret Lair`,
]
