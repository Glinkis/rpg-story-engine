import { randomValue } from "../rolls"
import { Biome } from "../../../shared/types"

interface Contents {
  [key: string]: (town?: any, biome?: Biome, base?: any) => string
}

/**
 * This is the function used to handle random encounters. It needs a lot of work, and will change.
 */
export function contentsFetcher(town: any, biome: Biome, keyTarget: string[], contents: Contents, base?: any) {
  if (keyTarget == null) {
    throw new TypeError(`Key target is not defined.`)
  }

  const key = randomValue(keyTarget)
  const content = contents[key]

  if (typeof content === `function`) {
    return content(town, biome, base)
  }

  throw new TypeError(`${content} is not a function.`)
}
