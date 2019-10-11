import Randoma from "randoma"

/**
 * All functions use this pseudo-random number generation library.
 * @see https://www.npmjs.com/package/randoma
 */
const seeded = new Randoma({ seed: 0 })

/**
 * Returns a random number between zero and the defined maximum value.
 */
export function random(max: number) {
  return seeded.integerInRange(0, max)
}

/**
 * Returns a random floating point number between zero and the defined maximum value.
 */
export function randomFloat(max: number) {
  return seeded.floatInRange(0, max)
}

/**
 * Returns a random number between the defined minimum and maximum value.
 */
export function randomRange(min: number, max: number) {
  return seeded.integerInRange(min, max)
}

/**
 * Returns a random floating point number between zero and the defined maximum value.
 */
export function randomFloatRange(min: number, max: number) {
  return seeded.floatInRange(min, max)
}

/**
 * Returns a random value from an array.
 */
export function randomValue<T>(array: T[]) {
  return seeded.arrayItem(array)
}

/**
 * Returns a random choice from the provided values.
 */
export function either<T>(...values: T[]) {
  return seeded.arrayItem(values)
}

/**
 * Rolls a number of dices with n-number of sides.
 */
export function dice(amount: number, sides: number) {
  const rolls: number[] = []
  while (amount > rolls.length) {
    rolls.push(seeded.integerInRange(0, sides))
  }
  return rolls.reduce((result, roll) => result + roll)
}
