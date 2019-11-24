import { Building } from "../building/createBuilding"
import { Blacksmith } from "./blacksmith"

export interface Smithy extends Building {
  name: string
  activity: string
  blacksmith: Blacksmith
  assistant: any
  weapons: string[]
  mundane: string[]
}
