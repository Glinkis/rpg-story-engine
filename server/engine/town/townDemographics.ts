import { clone } from "../utils"
import { weightedRandomFetcher } from "../tools/weightedRandomFetcher"
import { townData } from "./townData"

export function townDemographics(town: any) {
  return clone(weightedRandomFetcher(town, townData.type[town.type].demographics, "", "", "popPercentages"))
}
