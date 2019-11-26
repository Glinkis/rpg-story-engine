import { Weapon } from "../../../shared/Weapon"
import { Building } from "../building/createBuilding"
import { Blacksmith } from "./blacksmith"

export interface Smithy extends Building {
  name: string
  activity: string
  blacksmith: Blacksmith
  assistant: any
  weapons: Weapon[]
  mundane: string[]
}
