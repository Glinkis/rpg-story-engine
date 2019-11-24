import { randomRange } from "../rolls"

/**
 * Fetches a random key from an object
 * Used to fetch when it's not important which it fetches;
 * any random tavern, or any random Patreon character.
 */
export function objectArrayFetcher(target: any, args?: any) {
  const key = Object.keys(target)
  const index = randomRange(0, key.length)
  return target[key[index]] || target[key[0]]
}
