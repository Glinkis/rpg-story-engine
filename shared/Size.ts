import { Roll } from "./types"

/**
 * TODO: Add description.
 */
export enum Size {
  Cavernous = `cavernous`,
  Huge = `huge`,
  QuiteLarge = `quite large`,
  Large = `large`,
  Spacious = `spacious`,
  AverageSized = `average sized`,
  SomewhatCramped = `somewhat cramped`,
  Small = `small`,
  Tiny = `tiny`,
  ExtremelyCramped = `extremely cramped`,
}

export const defaultSizeRolls: Roll[] = [
  [95, Size.Cavernous],
  [80, Size.Huge],
  [70, Size.QuiteLarge],
  [60, Size.Large],
  [50, Size.Spacious],
  [40, Size.AverageSized],
  [30, Size.SomewhatCramped],
  [20, Size.Small],
  [10, Size.Tiny],
  [0, Size.ExtremelyCramped],
]
