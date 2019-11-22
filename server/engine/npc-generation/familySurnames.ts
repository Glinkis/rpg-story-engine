import { Marriage } from "./createFamilyMembers"
import { variables } from "../global"
import { genderData } from "./genderData"

// TODO test matrilineal marriages
export function marriageIsMatrilineal(marriage: Marriage) {
  return false
}

/**
 * Given a marriage with at least one child,
 * determine parent surnames.
 */
export function getParentSurnames(marriage: Marriage) {
  let familyName: string | undefined
  let fatherSurname: string | undefined
  let motherSurname: string | undefined

  if (marriage.children.length === 0) {
    familyName = undefined
  } else {
    familyName = variables.npcs[marriage.children[0]].lastName
    fatherSurname = familyName
    motherSurname = undefined
    if (marriageIsMatrilineal(marriage)) {
      ;[fatherSurname, motherSurname] = [motherSurname, fatherSurname]
    }
  }

  return { fatherSurname, motherSurname }
}

/**
 * Given a marriage with at least one parent or child,
 * determine child surnames.
 */
export function getChildSurname(marriage: Marriage) {
  if (marriage.children.length !== 0) {
    return variables.npcs[marriage.children[0]].lastName
  }

  if (marriage.parents.length) {
    const familyGender = marriageIsMatrilineal(marriage) ? `woman` : `man`
    const maidenGender = genderData[familyGender].oppositeGender

    let head = marriage.parents.find(key => variables.npcs[key].gender === familyGender)
    if (head) return variables.npcs[head].lastName

    head = marriage.parents.find(key => variables.npcs[key].gender === maidenGender)
    if (head) return variables.npcs[head].lastName
  }
}
