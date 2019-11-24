/**
 * Creates a globally unique key.
 * Useful for identifing objects.
 *
 * Shamelessly stolen from
 * https://gist.github.com/jed/982883
 */
export function createUniqueKey(a = ``) {
  return a
    ? // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, createUniqueKey)
}
