/**
 * Searches with a depth of one;
 * i.e. this will search the object setup.professions for a specific
 */
export function findInContainer<T>(container: Record<any, T>, key: string, value: any) {
  for (const [object, values] of Object.entries(container)) {
    if (Array.isArray(values) && values.includes(value)) {
      return container[object]
    }
  }
}
