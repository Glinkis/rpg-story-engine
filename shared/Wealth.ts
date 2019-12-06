import { Roll } from "./types"

/**
 * TODO: Add description.
 */
export enum Wealth {
  Kingly = `kingly`,
  Aristocratic = `aristocratic`,
  Wealthy = `wealthy`,
  Comfortable = `comfortable`,
  Modest = `modest`,
  Poor = `poor`,
  Squalid = `squalid`,
  Destitute = `destitute`,
}

export const defaultWealthRolls: Roll[] = [
  [95, Wealth.Kingly],
  [80, Wealth.Aristocratic],
  [70, Wealth.Wealthy],
  [60, Wealth.Comfortable],
  [50, Wealth.Modest],
  [25, Wealth.Poor],
  [15, Wealth.Squalid],
  [0, Wealth.Destitute],
]
