import { randomValue } from "../rolls"
import { Biome } from "../../../shared/types"

interface Contents {
  [key: string]: (town?: any, biome?: Biome, base?: any) => string
}

/**
 * This is the function used to handle random encounters. It needs a lot of work, and will change.
 */
export function contentsFetcher(town: any, biome: Biome, keyTarget: string[], contents: Contents, base?: any) {
  const key = randomValue(keyTarget)
  return contents[key](town, biome, base)
}
