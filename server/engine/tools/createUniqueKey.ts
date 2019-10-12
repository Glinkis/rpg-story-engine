let uniqueKey = 0

/**
 * Creates a globally unique key.
 * Useful for identifing objects.
 */
export function createUniqueKey() {
  return String(uniqueKey++)
}
