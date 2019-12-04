import { Roll } from "./types"

export enum Cleanliness {
  Fastidious = `fastidious`,
  VeryTidy = `very tidy`,
  Tidy = `tidy`,
  ReasonablyTidy = `reasonably tidy`,
  SomewhatMessy = `somewhat messy`,
  RatherMessy = `rather messy`,
  VeryMessy = `very messy`,
  ExtremelyMessy = `extremely messy`,
  DengerouslyMessy = `dangerously messy`,
}

export const defaultCleanlinessRolls: Roll[] = [
  [80, Cleanliness.Fastidious],
  [70, Cleanliness.VeryTidy],
  [60, Cleanliness.Tidy],
  [50, Cleanliness.ReasonablyTidy],
  [40, Cleanliness.SomewhatMessy],
  [30, Cleanliness.RatherMessy],
  [20, Cleanliness.VeryMessy],
  [10, Cleanliness.ExtremelyMessy],
  [0, Cleanliness.DengerouslyMessy],
]
