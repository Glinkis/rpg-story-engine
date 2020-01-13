import { variables } from "../global"

/**
 * This is a function that returns the profile widget for the provided object.
 * @param obj The object. It is mandatory.
 * @param base Is the front-facing text.
 * @param type Is the type of object it is- it points towards npcs as a default.
 * For buildings, point towards town.buildings.tavern
 * For factions, point towards town.factions
 */
export function profile(obj: any, base?: any, type?: string) {
  type = type || `npcs`

  if (typeof obj === `string`) {
    console.error(`Profile function for ${obj} called with a string.`)
    obj = variables[type][obj]
  }

  return JSON.stringify({
    title: base || obj.name || obj.race,
    type: type || obj.type,
    key: obj.key || ``,
  })
}
