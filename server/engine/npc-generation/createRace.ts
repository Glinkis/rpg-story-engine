import { randomRange, randomValue } from "../rolls"
import { raceTraitsData } from "./npcData"
import { HEIGHT_CHART } from "./heightChart"
import { bmiDescriptions } from "./bmiDescriptions"
import { closestMatch } from "../tools/closestMatch"
import { NPC } from "./npc"

export function createRace(npc: NPC) {
  const raceTraits = raceTraitsData[npc.race]
  const genderTraits = raceTraits.genderTraits[npc.gender]

  if (randomRange(1, 100) >= genderTraits.beardProbability) {
    npc.beard = randomValue(raceTraits.beard)
  }

  npc.heightRoll = genderTraits.baseHeight + genderTraits.heightModifier()
  npc.weightRoll = genderTraits.baseWeight + genderTraits.heightModifier() * genderTraits.weightModifier()

  npc.bmi = Math.trunc((npc.weightRoll / (npc.heightRoll * npc.heightRoll)) * raceTraits.bmiModifier)
  npc.weight = npc.weight || closestMatch(bmiDescriptions, `weight`, `bmi`, `muscleMass`, npc.bmi, npc.muscleMass)

  for (const [value, description] of HEIGHT_CHART) {
    if (value <= npc.heightRoll) {
      npc.height = description
    }
  }

  return npc
}
