export const buildingTypes = {
  "Tavern": setup.createTavern,
  "Smithy": setup.createSmithy,
  "Docks": setup.createDocks,
  "Alchemist": setup.createAlchemist,
  "General Store": setup.createGeneralStore,
  "Brothel": setup.createBrothel,
  "Town Square": setup.createTownSquare,
  "Temple": setup.createTemple,
  "Market": setup.createMarket,
  "Graveyard": setup.createGraveyard,
  "Bakery": setup.goodsAndServices.default.create(`bakery`),
  "Florist": setup.goodsAndServices.default.create(`florist`),
  "Tailor": setup.goodsAndServices.default.create(`tailor`),
  "Butcher": setup.goodsAndServices.default.create(`butcher`),
  "Cobbler": setup.goodsAndServices.default.create(`cobbler`),
  "Barber": setup.goodsAndServices.default.create(`barber`),
}

export function createNewBuilding(town, buildingType, opts) {
  // this is necessary to point the function towards where the building creation function is kept.
  // unfortunately, it currently needs to be updated manually with each new building.

  buildingTypes[buildingType](town, opts)
  return town
}
