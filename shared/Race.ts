/**
 * TODO: Add description.
 */
export enum MajorRace {
  Dragonborn = `dragonborn`,
  Dwarf = `dwarf`,
  Elf = `elf`,
  Gnome = `gnome`,
  HalfElf = `half-elf`,
  Halfling = `halfling`,
  HalfOrc = `half-orc`,
  Human = `human`,
  Tiefling = `tiefling`,
}

/**
 * TODO: Add desciption.
 */
export enum MinorRace {
  Orc = `orc`,
  Devil = `devil`,
}

export type Race = MajorRace | MinorRace
