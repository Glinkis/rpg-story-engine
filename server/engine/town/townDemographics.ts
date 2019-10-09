import { clone } from "../utils"
import { weightedRandomFetcher } from "../tools/weightedRandomFetcher"
import { townData } from "./townData"

interface Town {
  type: any
  _baseDemographics: any
  [key: string]: any
}

export function townDemographics(town: Town) {
  console.log("Creating town demographics...")
  town._baseDemographics = clone(
    weightedRandomFetcher(town, townData.type[town.type].demographics, "", "", "popPercentages")
  )
  return town
}
