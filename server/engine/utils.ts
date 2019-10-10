/**
 * @copyright Copyright © 2013–2018 Thomas Michael Edwards
 *
 * Returns a deep copy of the given object.
 *
 * NOTE:
 *  1.  `clone()` does not clone functions, however, since function definitions
 *      are immutable, the only issues are with expando properties and scope.
 *      The former really should not be done.  The latter is problematic either
 *      way—damned if you do, damned if you don't.
 *  2.  `clone()` does not maintain referential relationships—e.g. multiple
 *      references to the same object will, post-cloning, refer to different
 *      equivalent objects; i.e. each reference will receive its own clone
 *      of the original object.
 */
export function clone<T>(orig: T): T {
  /*
    Immediately return the primitives and functions.
  */
  if (typeof orig !== "object" || orig === null) {
    return orig
  }

  /*
    Unbox instances of the primitive exemplar objects.
  */
  if (orig instanceof String) {
    return String(orig) as any
  }
  if (orig instanceof Number) {
    return Number(orig) as any
  }
  if (orig instanceof Boolean) {
    return Boolean(orig) as any
  }

  /*
    Create a copy of the original object.

    NOTE: Each non-generic object that we wish to support must be
    explicitly handled below.
  */
  let copy: any

  // Handle instances of the core supported object types.
  if (orig instanceof Array) {
    copy = new Array(orig.length)
  } else if (orig instanceof Date) {
    copy = new Date(orig.getTime())
  } else if (orig instanceof Map) {
    copy = new Map()
    orig.forEach((val, key) => copy.set(key, clone(val)))
  } else if (orig instanceof RegExp) {
    copy = new RegExp(orig)
  } else if (orig instanceof Set) {
    copy = new Set()
    orig.forEach(val => copy.add(clone(val)))
    // eslint-disable-next-line brace-style
  }

  // Handle instances of unknown or generic objects.
  else {
    // We try to ensure that the returned copy has the same prototype as
    // the original, but this will probably produce less than satisfactory
    // results on non-generics.
    copy = Object.create(Object.getPrototypeOf(orig))
  }

  /*
    Duplicate the original object's own enumerable properties, which will
    include expando properties on non-generic objects.

    NOTE: This does not preserve ES5 property attributes.  Neither does
    the delta coding or serialization code, however, so it's not really
    an issue at the moment.
  */
  Object.keys(orig).forEach(name => (copy[name] = clone((orig as any)[name])))

  return copy
}
