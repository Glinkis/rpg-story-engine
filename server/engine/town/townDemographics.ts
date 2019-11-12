import { clone } from "../utils"
import { weightedRandomFetcher } from "../tools/weightedRandomFetcher"
import { townData } from "./townData"
import { Town } from "./town"

export function townDemographics(town: Town) {
  return clone(weightedRandomFetcher(town, townData.type[town.type].demographics, ``, ``, `popPercentages`))
}
