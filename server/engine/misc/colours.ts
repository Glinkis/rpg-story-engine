import { randomValue } from "../rolls"

export enum Colour {
  Yellow = `yellow`,
  Orange = `orange`,
  Red = `red`,
  Purple = `purple`,
  Blue = `blue`,
  Green = `green`,
  Brown = `brown`,
  Black = `black`,
  White = `white`,
}

export interface ColourData {
  colour: string[]
  coloured: string[]
  properties: {
    isNatural: boolean
    isPlant: boolean
    isMineral: boolean
    isPaint: boolean
  }
}

export const colours: Record<Colour, ColourData> = {
  [Colour.Yellow]: {
    properties: {
      isNatural: true,
      isPlant: true,
      isMineral: true,
      isPaint: true,
    },
    colour: [
      `ivory`,
      `cream`,
      `yellow`,
      `beige`,
      `peridot`,
      `citrine`,
      `dark yellow`,
      `light yellow`,
      `bright yellow`,
      `pastel yellow`,
      `gold`,
      `lemon yellow`,
    ],
    coloured: [
      `daffodil`,
      `lemon`,
      `dandelion`,
      `straw`,
      `brass`,
      `banana`,
      `canary`,
      `corn`,
      `gold`,
      `cheese`,
      `butter`,
      `amber`,
    ],
  },
  [Colour.Orange]: {
    properties: {
      isNatural: true,
      isPlant: false,
      isMineral: false,
      isPaint: true,
    },
    colour: [
      `vermillion`,
      `ochre`,
      `orange`,
      `burnt orange`,
      `sherbert orange`,
      `ginger`,
      `amber`,
      `light orange`,
      `dark orange`,
      `bright orange`,
      `pastel orange`,
      `carrot orange`,
      `mahogany`,
      `sunglow orange`,
      `pumpkin orange`,
    ],
    coloured: [
      `orangutan`,
      `carrot`,
      `tangerine`,
      `apricot`,
      `sandstone`,
      `honey`,
      `marmalade`,
      `apricot`,
      `pumpkin`,
      `poppy`,
      `marigold`,
    ],
  },
  [Colour.Red]: {
    properties: {
      isNatural: true,
      isPlant: false,
      isMineral: true,
      isPaint: true,
    },
    colour: [
      `red`,
      `bright red`,
      `firey red`,
      `auburn`,
      `crimson`,
      `oxblood red`,
      `vermillion`,
      `maroon`,
      `carmine`,
      `dark red`,
      `light red`,
      `pale red`,
      `pastel red`,
      `apricot`,
      `burgundy`,
      `blood red`,
      `cardinal`,
      `coral`,
      `pink`,
      `mystic red`,
      `rose red`,
      `scarlet`,
      `rust`,
      `salmon`,
    ],
    coloured: [
      `rose`,
      `tomato`,
      `blood`,
      `fire`,
      `rust`,
      `coral`,
      `apple`,
      `chili`,
      `raspberry`,
      `watermelon`,
      `fig`,
      `cranberry`,
      `cherry`,
      `ruby`,
      `cardinal`,
    ],
  },
  [Colour.Purple]: {
    properties: {
      isNatural: false,
      isPlant: false,
      isMineral: true,
      isPaint: false,
    },
    colour: [
      `tyrian purple`,
      `royal purple`,
      `electric purple`,
      `purple`,
      `mauve`,
      `violet`,
      `pale purple`,
      `dark purple`,
      `light purple`,
      `bright purple`,
      `dull purple`,
      `bright violet`,
      `lavendar`,
      `lilac`,
      `pale plum`,
      `pastel purple`,
      `amethyst`,
    ],
    coloured: [`thistle`, `orchid`, `blackberry`, `eggplant`, `lilac`, `plum`, `grape`, `iris`, `lavendar`, `amethyst`],
  },
  [Colour.Blue]: {
    properties: {
      isNatural: false,
      isPlant: false,
      isMineral: true,
      isPaint: false,
    },
    colour: [
      `light blue`,
      `blue`,
      `dark blue`,
      `deep blue`,
      `navy blue`,
      `cerulean`,
      `azure`,
      `indigo`,
      `turquoise`,
      `periwinkle`,
      `teal`,
      `capri`,
      `royal blue`,
      `sapphire`,
      `pastel blue`,
    ],
    coloured: [`denim`, `sapphire`, `sea`, `storm`, `sky`, `peacock`, `topaz`],
  },
  [Colour.Green]: {
    properties: {
      isNatural: true,
      isPlant: true,
      isMineral: true,
      isPaint: true,
    },
    colour: [
      `green`,
      `olive`,
      `sage`,
      `emerald`,
      `lime`,
      `chartreuse`,
      `mint`,
      `seafoam green`,
      `pear green`,
      `apple green`,
      `bright green`,
      `dark green`,
      `forest green`,
      `light green`,
      `celadon`,
      `pastel green`,
    ],
    coloured: [`seafoam`, `shamrock`, `seaweed`, `pear`, `pickle`, `leaf`, `grass`, `frog`, `turtle`, `moss`],
  },
  [Colour.Brown]: {
    properties: {
      isNatural: true,
      isPlant: true,
      isMineral: true,
      isPaint: true,
    },
    colour: [
      `brown`,
      `umber`,
      `chocolate`,
      `caramel`,
      `burnt butter`,
      `mud brown`,
      `tan`,
      `dark brown`,
      `rust brown`,
      `sandy brown`,
      `bronze`,
      `sepia`,
      `pastel brown`,
    ],
    coloured: [
      `acorn`,
      `almond`,
      `baked bread`,
      `bark`,
      `beeswax`,
      `coffee`,
      `ale`,
      `pecan`,
      `mocha`,
      `cork`,
      `wood`,
      `tea`,
    ],
  },
  [Colour.Black]: {
    properties: {
      isNatural: false,
      isPlant: false,
      isMineral: true,
      isPaint: false,
    },
    colour: [`onyx`, `ebony`, `charcoal`, `licorice`, `black`, `slate`],
    coloured: [
      `charcoal`,
      `licorice`,
      `iron`,
      `burnt bread`,
      `obsidian`,
      `crow`,
      `soot`,
      `ink`,
      `raven`,
      `storm cloud`,
    ],
  },
  [Colour.White]: {
    properties: {
      isNatural: false,
      isPlant: false,
      isMineral: false,
      isPaint: true,
    },
    colour: [
      `white`,
      `ghost white`,
      `pure white`,
      `pearl white`,
      `floral white`,
      `vanilla`,
      `seashell`,
      `snow white`,
      `ivory`,
    ],
    coloured: [
      `cloud`,
      `eggshell`,
      `champagne`,
      `bone`,
      `snow`,
      `tooth`,
      `ivory`,
      `cotton`,
      `dandelion`,
      `chalk`,
      `swan`,
      `milk`,
      `sheep`,
      `pearl`,
      `lotus`,
    ],
  },
}

interface Filters {
  banned?: Colour[]
}

export function createColour(filters: Filters = {}) {
  const { banned = [] } = filters

  const available = Object.values(Colour)

  for (const colour of available) {
    if (banned.includes(colour)) {
      continue
    }

    for (const filter in filters) {
      if (filters[filter] === banned) {
        continue
      }

      if (filters[filter] !== colours[colour].properties[filter]) {
        banned.push(colour)
        break
      }
    }
  }

  for (const colour of banned) {
    if (available.includes(colour)) {
      delete available[colour]
    }
  }

  const selected = colours[randomValue(available)]
  const randomColour = randomValue(selected.colour)
  const randomColoured = randomValue(selected.coloured)

  return randomValue([randomColour, `${randomColoured} coloured`])
}

export function allColours() {
  return Object.values(Colour).reduce((all, colour) => {
    return all.concat(colours[colour].colour)
  }, [] as string[])
}
