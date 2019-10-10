import { randomValue } from "../rolls"

interface Contents {
  [key: string]: (town?: any, biome?: string, base?: any) => string
}

/**
 * This is the function used to handle random encounters. It needs a lot of work, and will change.
 */
export function contentsFetcher(town: any, biome: string, keyTarget: string[], contents: Contents, base?: any) {
  const key = randomValue(keyTarget)
  return contents[key](town, biome, base)
}
