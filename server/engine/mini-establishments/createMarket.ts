import { Town } from "../town/town"
import { createBuilding } from "../building/createBuilding"
import { randomValue } from "../rolls"
import { market } from "./marketData"

export function createMarket(town: Town, opts = {}) {
  const building = createBuilding(town, `market`)
  const wordNoun = randomValue([`market`, `bazaar`, `agora`, `emporium`, `plaza`, `piazza`])

  const name = randomValue([
    `The Markets`,
    `The Markets of ${town.name}`,
    `The ${randomValue([town.name, building.road])} ${wordNoun}`,
  ])

  const draw = randomValue(market.draw)

  return {
    ...building,
    name,
    draw,
    associatedTown: town.name,
    buildingType: `market`,
    needsWordNoun: false,
    wordNoun,
    location: randomValue(market.location),
    size: randomValue(market.size),
    cleanliness: randomValue(market.cleanliness),
    organisation: randomValue(market.organisation),
    crowd: randomValue(market.crowd),
    notableFeature: draw,
  }
}

function readoutMarket(market) {
  market.tippyDescription = `A ${market.size || market._size} ${market.wordNoun} that's ${market.cleanliness ||
    market._cleanliness}, and is known for ${market.notableFeature}.`
}
