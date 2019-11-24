/**
 * Reference list for all races.
 *
 * When referring to a race, it's preferred
 * to use one of these values directly.
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

export enum MinorRace {
  Orc = `orc`,
  Devil = `devil`,
}

export type Race = MajorRace | MinorRace
