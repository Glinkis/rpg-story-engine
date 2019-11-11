import { npcData } from "./npcData"

export function createAge(npc: Npc) {
  if (npcData.raceTraits[npc.race].ageTraits.ageDescriptors) {
    const age = npcData.raceTraits[npc.race].ageTraits.ageDescriptors.find(descriptor => {
      return descriptor[0] <= npc.ageYears
    })
    npc.age = age && age[1]
  } else {
    console.log(`Called age descriptor without a valid array.`)
  }

  if (npc.ageStage === `child`) {
    npc.hasClass = false
    npc.profession = npc.age
    npc.dndClass = npc.age
    npc.background = `child`
  }

  return npc
}

export function isOfAge(ageStage: string, race: string, ageYears: number) {
  return ageYears >= npcData.raceTraits[race].ageTraits[ageStage].baseAge
}
