/**
 * Returns a number whose value is limited to the given range.
 */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}
