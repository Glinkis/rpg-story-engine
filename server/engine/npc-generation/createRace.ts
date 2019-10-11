import { randomRange, randomValue } from "../rolls"
import { npcData } from "./npcData"
import { bmiDescriptions } from "./bmiDescriptions"
import { closestMatch } from "../tools/closestMatch"

export function createRace(npc: any) {
  console.log(`assigning racial traits to ${npc.name}...`)
  const raceTraits = npcData.raceTraits[npc.race]
  const genderTraits = raceTraits.genderTraits[npc.gender]

  if (randomRange(1, 100) >= genderTraits.beardProbability) {
    npc.beard = randomValue(raceTraits.beard)
  }

  console.log(`base height: ${genderTraits.baseHeight}`)

  npc.heightRoll = genderTraits.baseHeight + genderTraits.heightModifier()
  npc.weightRoll = genderTraits.baseWeight + genderTraits.heightModifier() * genderTraits.weightModifier()

  npc.bmi = Math.trunc((npc.weightRoll / (npc.heightRoll * npc.heightRoll)) * raceTraits.bmiModifier)
  npc.weight = npc.weight || closestMatch(bmiDescriptions, `weight`, `bmi`, `muscleMass`, npc.bmi, npc.muscleMass)

  const height = npcData.heightChart.find(descriptor => {
    return descriptor[0] <= npc.heightRoll
  })

  npc.height = height && height[1]

  return npc
}
