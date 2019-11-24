import { fetchProfessionChance } from "./fetchProfessionChance"
import { findInContainer } from "../tools/findInContainer"
import { professions } from "./professions"
import { NPC } from "./npc"

export function findProfession(town: any, npc: NPC, profession?: string) {
  profession = profession || npc.dndClass || npc.profession

  if (!profession && npc.socialClass) {
    profession = fetchProfessionChance(town, npc)
  }

  if (profession && professions[profession]) {
    return professions[profession]
  }

  const found = findInContainer(professions, `synonyms`, profession)

  return found || professions.peasant
}
