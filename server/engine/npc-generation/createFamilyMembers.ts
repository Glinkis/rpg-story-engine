import { MajorRace, Race } from "../../../shared/Race"
import { Gender } from "../../../shared/Gender"
import { randomRange, randomValue } from "../rolls"
import { createNPC } from "./createNPC"
import { relativeSocialClass, familySocialClass } from "./createSocialClass"
import { isOfAge } from "./createAge"
import { raceTraitsData } from "./npcData"
import { genderData } from "./genderData"
import { familyData } from "./familyData"
import { setAsPartners } from "./setAsPartners"
import { findPartnerRace, findChildRace, findParentRaces } from "./familyRaces"
import { getParentSurnames, getChildSurname } from "./familySurnames"

export interface Marriage {
  parents: string[]
  children: string[]
  lifestyle?: string
  socialClass?: string
}

// General function for inserting individual relatives.
// Returns the corresponding relative, or undefined
export function createRelative(town, family, base, force = false) {
  // sanity-check
  if (base.ageYears <= 0) return
  if (base.race === `devil`) return
  if (!base.lastName) delete base.lastName

  // Avoid secondary NPC spam
  if (!force) {
    if (randomRange(1, 100) <= familyData.absencePercent) {
      return
    }
    if (isOfAge(`elderly`, base.race, base.ageYears)) {
      if (randomRange(1, 100) <= familyData.oldAbsencePercent) return
      if (base.ageYears >= raceTraitsData[base.race].ageTraits.ageDescriptors[0]) {
        if (randomRange(1, 100) <= familyData.veryOldAbsencePercent) return
      }
    }
  }

  const relative = createNPC(town, base)

  family.members[relative.key] = {
    key: relative.key,
    parentMarriage: undefined,
    marriages: undefined,
    canRemarry: true,
  }

  return relative
}

export function createParentage(town, family, npc, forceFather = false, forceMother = false) {
  const node = family.members[npc.key]

  if (node.parentMarriage === undefined) {
    if (randomRange(1, 100) <= familyData.orphanPercent && !forceFather && !forceMother) {
      node.parentMarriage = null
    } else {
      const marriage: Marriage = {
        parents: [],
        children: [npc.key],
      }

      const { motherRace, fatherRace, lineage } = findParentRaces(npc)
      npc.parentalLineage = lineage
      const { fatherSurname, motherSurname } = getParentSurnames(marriage)

      const fatherBase = {
        ...familyData.relativeBase(npc),
        gender: Gender.Man,
        ageYears: familyData.parentAge(npc),
        race: fatherRace,
        lastName: fatherSurname,
        socialClass: relativeSocialClass(npc.socialClass),
      }

      const motherBase = {
        ...familyData.relativeBase(npc),
        gender: Gender.Woman,
        ageYears: familyData.parentAge(npc),
        race: motherRace,
        lastName: motherSurname,
        socialClass: relativeSocialClass(npc.socialClass),
      }

      // TODO finish support for non-heterosexual marriages
      const father = createRelative(town, family, fatherBase, forceFather)
      const mother = createRelative(town, family, motherBase, forceMother)

      if (father) {
        marriage.parents.push(father.key)
        family.members[father.key].marriages = [marriage]
      }

      if (mother) {
        marriage.parents.push(mother.key)
        family.members[mother.key].marriages = [marriage]
      }

      marriage.socialClass = familySocialClass(marriage)
      createChildren(town, family, marriage, familyData.siblingRoll(), motherRace, fatherRace)

      node.parentMarriage = marriage
      node.siblings = marriage.children
    }
  }
}

export function createChildren(
  town,
  family,
  marriage,
  amount,
  motherRace: Race = MajorRace.Human,
  fatherRace: Race = MajorRace.Human,
  force = false
) {
  if (!force) {
    amount -= marriage.children.length
  }

  const surname = getChildSurname(marriage)
  const siblingClass = marriage.socialClass

  const inserted: string[] = []

  for (let k = 0; k < amount; k++) {
    const siblingBase = {
      race: findChildRace(town, motherRace, fatherRace),
      gender: randomValue([Gender.Man, Gender.Woman]),
      ageYears: familyData.childAge(marriage),
      lastName: surname,
      socialClass: siblingClass,
      family: family.key,
      canBeCustom: false,
      isShallow: true,
      hasHistory: false,
    }

    if (isOfAge(`young adult`, siblingBase.race, siblingBase.ageYears)) {
      siblingBase.socialClass = relativeSocialClass(siblingClass)
    }

    const sibling = createRelative(town, family, siblingBase, force)

    if (sibling) {
      marriage.children.push(sibling.key)
      inserted.push(sibling.key)
      family.members[sibling.key].parentMarriage = marriage
      family.members[sibling.key].siblings = marriage.children
    }
  }

  return inserted
}

export function createMarriage(town, family, npc, force = false) {
  const marriageMin = raceTraitsData[npc.race].ageTraits[`young adult`].baseAge
  const newMarriage: Marriage = {
    parents: [npc.key],
    children: [],
  }

  // TODO finish support for non-heterosexual marriages
  const partnerBase = {
    ...familyData.relativeBase(npc),
    gender: genderData[npc.gender].oppositeGender,
    ageYears: Math.max(familyData.partnerAge(npc), marriageMin),
    race: findPartnerRace(town, npc),
    socialClass: relativeSocialClass(relativeSocialClass(npc.socialClass)),
  }

  const partner = createRelative(town, family, partnerBase, force)

  if (partner) {
    setAsPartners(npc, partner)
    newMarriage.parents.push(partner.key)
    family.members[partner.key].marriages = [newMarriage]
  }

  newMarriage.socialClass = familySocialClass(newMarriage)
  createChildren(town, family, newMarriage, familyData.siblingRoll(), npc.race, partnerBase.race)

  return newMarriage
}
