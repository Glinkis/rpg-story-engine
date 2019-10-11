/**
 * Searches with a depth of one;
 * i.e. this will search the object setup.professions for a specific
 */
export function findInContainer<T>(container: Record<any, T>, key: string, value: any) {
  console.log(`running setup.findInContainer...`)
  console.log({
    container,
    key,
    value,
  })

  for (const object of Object.keys(container)) {
    const values = container[object][key]

    if (Array.isArray(values) && values.includes(value)) {
      console.log(`Found ${value} in ${object}`)
      return container[object]
    }
  }
}
