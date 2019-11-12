import { randomValue } from "../rolls"

/**
 * Function to generate strings from tagged template literals,
 * where each value value may be a string, or an array of strings,
 * from which a random value is subsequentially picked.
 *
 * @example
 * // Results in either "Value is a", or "Value is b".
 * rt`Value is ${['a', 'b']}`
 */
export function rt(strings: TemplateStringsArray, ...values: (string | string[])[]) {
  return strings.reduce((result, string, index) => {
    const value = values[index]
    return result + string + (Array.isArray(value) ? randomValue(value) : value)
  })
}
