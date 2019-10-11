/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { randomValue } from "../rolls"
import { RollData } from "../../../shared/types"

interface Rollable {
  roll: Record<string, any>
}

/**
 * This handles setting up getters and setters for attributes like wealth,
 * cleanliness and such.
 *
 * It expects the `baseObj` (the one that is getting the attributes), and the
 * `rollDataObj` (the one that is providing the descriptions).
 *
 * It needs the propName to be exact, unless the optional `keyName` is specified.
 * This is for when you might want to tie several properties to the same attribute,
 * i.e. cleanliness controlling bedleanliness.
 *
 * The `indexNumber` is an optional argument, which tells the function to look at
 * a different location in the array for the string. This is most useful for
 * when you have multiple descriptions tied to the same thing
 * (long and short descriptions, or cleanliness controlling bedCleanliness as well.)
 */
export function defineRollDataGetter<T extends Rollable>(
  baseObj: T,
  rollDataObj: RollData,
  propName: string,
  keyName?: string,
  indexNumber?: number,
  rollLocation?: any
) {
  keyName = keyName || propName
  indexNumber = indexNumber || 1
  rollLocation = rollLocation || baseObj.roll
  console.groupCollapsed(`DefineRollDataGetters`)
  console.log({
    baseObj,
    rollDataObj,
    propName,
    keyName,
    indexNumber,
    rollLocation,
  })
  if (!baseObj[propName]) {
    baseObj[propName] = ``
  }

  Object.defineProperty(baseObj, propName, {
    get(this: T) {
      // @ts-ignore
      console.log(`Fetching ${this.name} ${propName}.`)
      const rollArray = keyName ? rollDataObj[keyName] : []
      let result = rollArray.find(desc => {
        if (rollLocation) {
          // @ts-ignore
          return desc[0] <= rollLocation[keyName]
        } else {
          // @ts-ignore
          return desc[0] <= this.roll[keyName]
        }
      })
      if (result === undefined) {
        console.log(`Failed to get a descriptor that matched the roll of ${this.roll[propName]} for ${propName}.`)
        result = rollArray[rollArray.length - 1]
      }

      // @ts-ignore
      if (Array.isArray(result[indexNumber])) {
        // @ts-ignore
        result[indexNumber] = randomValue(result[indexNumber])
      }
      // @ts-ignore
      this[`_${propName}`] = result[indexNumber] || result
      return this[`_${propName}`]
    },
    set(val) {
      console.log(`Setting ${this.name} ${propName}.`)
      // @ts-ignore
      const rollArray = rollDataObj[keyName]
      let result = rollArray.find(desc => {
        if (rollLocation) {
          // @ts-ignore
          return desc[0] <= rollLocation[keyName]
        } else {
          // @ts-ignore
          return desc[0] <= this.roll[keyName]
        }
      })
      if (result === undefined) {
        console.log(`Failed to get a descriptor that matched the roll of ${this.roll[propName]} for ${propName}.`)
        result = rollArray[rollArray.length - 1]
      }
      this[`_${propName}`] = val || result[indexNumber]
      return this[`_${propName}`]
    },
  })
  console.groupEnd()
}
