interface ContentsTarget {
  [key: string]: (...args: any[]) => string
}

/**
 * This is the function used to handle random encounters. It needs a lot of work, and will change.
 */
export function contentsFetcher(town: any, biome: string, keyTarget: any, contentsTarget: ContentsTarget, base?: any) {
  const key = keyTarget.random()
  const contents = contentsTarget[key](town, biome, base)
  return contents
}
