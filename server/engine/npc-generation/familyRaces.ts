import { MajorRace, MinorRace, Race } from "../../../shared/Race"
import { Town } from "../town/town"
import { randomRange, random } from "../rolls"
import { fetchRace } from "./fetchRace"
import { NPC } from "./npc"

const { Human, Elf, HalfElf, HalfOrc, Tiefling, Dragonborn } = MajorRace
const { Orc, Devil } = MinorRace

// Given a NPC to be married, determine the partner race
const marriagePools: Partial<Record<Race, Race[]>> = {
  [Human]: [Human, Elf, Orc, HalfElf, HalfOrc, Tiefling],
  [Elf]: [Human, Elf, HalfElf],
  [Orc]: [Human, Orc, HalfOrc],
  [HalfElf]: [Human, Elf, HalfElf, HalfOrc],
  [HalfOrc]: [Human, Orc, HalfElf, HalfOrc],
  [Tiefling]: [Human, Tiefling],
}

export function findParentRaces(npc: NPC) {
  const parentalLineageRoll = randomRange(1, 8)

  let lineage: string | undefined
  let fatherRace: MajorRace | string
  let motherRace: MajorRace | string

  switch (npc.race) {
    case HalfOrc:
      if (parentalLineageRoll === 8) {
        lineage = `Both parents were half-orcs`
        fatherRace = HalfOrc
        motherRace = HalfOrc
      } else if (parentalLineageRoll >= 6) {
        lineage = `One parent was a human, the other was a half orc`
        motherRace = Human
        fatherRace = HalfOrc
      } else if (parentalLineageRoll >= 4) {
        lineage = `One parent was a half-orc, the other was an orc`
        motherRace = HalfOrc
        fatherRace = Orc
      } else {
        lineage = `One parent was a human, the other was an orc`
        motherRace = Human
        fatherRace = Orc
      }
      break
    case `half-elf`:
      if (parentalLineageRoll === 8) {
        lineage = `Both parents were half-elves`
        motherRace = HalfElf
        fatherRace = HalfElf
      } else if (parentalLineageRoll === 7) {
        lineage = `One parent was a human, the other was a half elf`
        fatherRace = HalfElf
        motherRace = Human
      } else if (parentalLineageRoll === 6) {
        lineage = `One parent was a half-elf, the other was an elf`
        fatherRace = HalfElf
        motherRace = Elf
      } else {
        lineage = `One parent was a human, the other was an elf`
        fatherRace = Elf
        motherRace = Human
      }
      break
    case Tiefling:
      if (parentalLineageRoll === 8) {
        lineage = `One parent was a human, the other was a devil`
        motherRace = Human
        fatherRace = Devil
      } else if (parentalLineageRoll === 7) {
        lineage = `One parent was a tiefling, the other was a devil`
        motherRace = Tiefling
        fatherRace = Devil
      } else if (parentalLineageRoll >= 4) {
        lineage = `One parent was a human, the other was a tiefling`
        motherRace = Human
        fatherRace = Tiefling
      } else {
        lineage = `Both parents were human, with their infernal ancestry manifesting in me later in life`
        motherRace = Human
        fatherRace = Human
      }
      break
    default:
      lineage = undefined
      motherRace = npc.race
      fatherRace = npc.race
  }

  // For the sake of symmetry
  if (randomRange(1, 2) === 2) {
    ;[motherRace, fatherRace] = [fatherRace, motherRace]
  }

  return { motherRace, fatherRace, lineage }
}

export function findChildRace(town: Town, motherRace: Race, fatherRace: Race) {
  motherRace = motherRace || fatherRace || fetchRace(town)
  fatherRace = fatherRace || motherRace || fetchRace(town)

  const races: Race[] = []

  races.push(motherRace, fatherRace)

  if (motherRace === fatherRace) {
    return motherRace
  }

  if (races.includes(Human)) {
    if (races.includes(Elf)) {
      return HalfElf
    }
    if (races.includes(Orc)) {
      return HalfOrc
    }

    const halfbreeds: Race[] = [HalfOrc, HalfElf, Tiefling, Dragonborn]

    if (races.find(race => halfbreeds.includes(race))) {
      if (random(100) > 70) {
        return races.find(race => race !== Human) || Human
      } else {
        return Human
      }
    }
  }

  return motherRace
}

export function findPartnerRace(town: Town, npc: NPC) {
  if (!(npc.race in marriagePools)) {
    return npc.race
  }

  const marriagePool = marriagePools[npc.race]

  if (marriagePool) {
    const pool = marriagePool.filter(race => town.baseDemographics[race])
    const poolSum = pool.map(race => town.baseDemographics[race]).reduce((a, b) => a + b, 0)

    let roll = Math.random() * poolSum
    for (let i = 0; i < pool.length; i++) {
      roll -= town.baseDemographics[pool[i]]
      if (roll <= 0) return pool[i]
    }
  }

  return npc.race
}
