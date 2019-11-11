import { randomValue } from "../rolls"

export function rt(strings: TemplateStringsArray, ...values: string[] | string[][]) {
  return strings.reduce((acc, val, index) => {
    const value = values[index]
    return acc + val + (Array.isArray(value) ? randomValue(value) : value)
  }, ``)
}
