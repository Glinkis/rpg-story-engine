import { clamp } from "../math"
import { dice, random, randomRange } from "../rolls"
import { genderData } from "./genderData"
import { variables } from "../global"
import { NPC } from "./npc"

interface Kinsey {
  [key: number]: {
    sexuality: string
    partnerGenderProbability(npc: NPC): string
  }
}

// this is just one person's efforts to increase diversity and make an attempt at relatively realistic sexuality modeling
// I cannot guarantee exact representation, and make no promises for such a thing- this is, at the end of the day, meant to be a tool for DMs.
// I would, however, be very open to feedback and ways that I could improve the system.

// Using the Kinsey scale, bastardised to fit my methods.

// if a partner exists, then we need to make sure that it's an acceptable gender.
export function createSexuality(npc: any) {
  if (npc.partnerID !== undefined) {
    if (variables.npcs[npc.partnerID].gender === npc.gender) {
      npc.roll.kinsey = 6
      npc.roll.sexuality = 99
    } else {
      npc.roll.sexuality = 47 + dice(11, 4)
    }
  }

  if (!npc.roll.kinsey) {
    const roll = randomRange(0, 100)
    npc.roll.sexuality = npc.roll.sexuality || roll || 47 + dice(13, 4)
    if (npc.roll.sexuality < 70) {
      npc.roll.kinsey = 0
    } else if (npc.roll.sexuality < 75) {
      npc.roll.kinsey = 1
    } else if (npc.roll.sexuality < 83) {
      npc.roll.kinsey = 2
    } else if (npc.roll.sexuality < 90) {
      npc.roll.kinsey = 3
    } else if (npc.roll.sexuality < 96) {
      npc.roll.kinsey = 4
    } else if (npc.roll.sexuality <= 100) {
      npc.roll.kinsey = 5
    } else {
      npc.roll.kinsey = 3
    }
  }

  const kinsey: Kinsey = {
    // true = male, false = female. Very basic function, am aware.
    0: {
      sexuality: `heterosexual`,
      partnerGenderProbability(npc) {
        return genderData[npc.gender].oppositeGender
      },
    },
    1: {
      sexuality: `heterosexual with passing interest in other $currentNPC.menwomen`,
      partnerGenderProbability(npc) {
        if (random(100) < 90) {
          return genderData[npc.gender].oppositeGender
        } else {
          return npc.gender
        }
      },
    },
    2: {
      sexuality: `predominantly heterosexual, but with more than a passing interest in $currentNPC.menwomen`,
      partnerGenderProbability(npc) {
        if (random(100) < 70) {
          return genderData[npc.gender].oppositeGender
        } else {
          return npc.gender
        }
      },
    },
    3: {
      sexuality: `bisexual`,
      partnerGenderProbability(npc) {
        if (random(100) < 50) {
          return genderData[npc.gender].oppositeGender
        } else {
          return npc.gender
        }
      },
    },
    4: {
      sexuality: `mostly homosexual, but with more than a passing interest in the opposite sex`,
      partnerGenderProbability(npc) {
        if (random(100) < 70) {
          return npc.gender
        } else {
          return genderData[npc.gender].oppositeGender
        }
      },
    },
    5: {
      sexuality: `homosexual with passing interest in the opposite sex`,
      partnerGenderProbability(npc) {
        if (random(100) < 90) {
          return npc.gender
        } else {
          return genderData[npc.gender].oppositeGender
        }
      },
    },
    6: {
      sexuality: `homosexual`,
      partnerGenderProbability(npc) {
        return npc.gender
      },
    },
  }

  return { ...npc, ...kinsey[clamp(npc.roll.kinsey, 0, 6)] }
}
