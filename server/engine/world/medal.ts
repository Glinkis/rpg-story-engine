import { randomValue } from "../rolls"

interface Medal {
  metal: string
  material: string
  emblem: string
  colour: string
}

export const medal = {
  create(base: Partial<Medal> = {}) {
    return {
      metal: randomValue(this.metal),
      material: randomValue(this.material),
      emblem: randomValue(this.emblem),
      colour: randomValue(this.colour),
      ...base,
    }
  },
  readout(medal: Medal) {
    return `This medal's emblem is made of ${medal.metal} and has a ${medal.material} ribbon. The emblem is ${medal.emblem} and the ribbon is coloured ${medal.colour}.`
  },
  metal: [
    `iron`,
    `steel`,
    `silver`,
    `bronze`,
    `gold`,
    `copper`,
    `aluminum`,
    `lead`,
    `tin`,
    `nickel`,
    `oak wood`,
    `pine wood`,
    `brass`,
  ],
  material: [`cloth`, `wool`, `fleece`, `silk`, `cotton`, `leather`, `burlap`, `horse hair`],
  emblem: [
    `a pair of wings`,
    `a downard facing sword`,
    `an upward facing sword`,
    `a skull`,
    `an eagle`,
    `an arrow`,
    `an embossed circle`,
    `an axe`,
    `a heart`,
    `a cross`,
    `a holy symbol`,
    `the symbol of a local noble`,
    `a lion`,
  ],
  colour: [
    `red`,
    `crimson`,
    `maroon`,
    `gold`,
    `yellow`,
    `peridot`,
    `peach`,
    `purple`,
    `orange`,
    `green`,
    `white`,
    `black`,
    `brown`,
    `blue`,
    `indigo`,
    `azure`,
    `mauve`,
    `teal`,
    `emerald`,
  ],
}
