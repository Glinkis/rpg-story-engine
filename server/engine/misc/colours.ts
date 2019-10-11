import { randomValue } from "../rolls"

export const colours = {
  yellow: {
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
  orange: {
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
  red: {
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
  purple: {
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
  blue: {
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
  green: {
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
  brown: {
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
  black: {
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
  white: {
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

// FIXME this whole function is not working at the moment.
export function createColour(filters: any = {}) {
  const { bannedColours = [] } = filters

  const availableColours = Object.keys(colours)
  console.log(availableColours)

  for (const colour in Object.keys(colours)) {
    if (bannedColours.includes(colour)) {
      continue
    }
    console.log(colours[colour])

    for (const filter in Object.keys(filters)) {
      if (filters[filter] === bannedColours) {
        continue
      }

      if (filters[filter] !== colours[colour].properties[filter]) {
        bannedColours.push(colour)
      }
    }
  }

  for (const bannedColour in bannedColours) {
    if (availableColours.includes(bannedColour)) {
      delete availableColours[bannedColour]
    }
  }

  const selectedColour = randomValue(availableColours)

  return randomValue([
    randomValue(colours[selectedColour].colour),
    `${randomValue(colours[selectedColour].coloured)} coloured`,
  ])
}
