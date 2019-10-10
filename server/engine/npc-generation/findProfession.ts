import { townData } from "../town/townData"
import { fetchProfessionChance } from "./fetchProfessionChance"

export function findProfession(town: any, npc: any, profession?: string) {
  profession = profession || npc.dndClass || npc.profession

  if (!profession && npc.socialClass) {
    profession = fetchProfessionChance(town, npc)
  }

  if (profession && townData.professions[profession]) {
    return townData.professions[profession]
  }

  const found = setup.findInContainer(townData.professions, `synonyms`, profession)

  return found || townData.professions.peasant
}
