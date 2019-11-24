export function calcPercentage(target: number, integer: number | number[]) {
  if (Array.isArray(integer)) {
    for (const int of integer) {
      target = (target / 100) * (100 + int)
    }
    return target
  }
  return (target / 100) * (100 + integer)
}
