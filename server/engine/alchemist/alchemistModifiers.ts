import { Activity } from "../../../shared/Activity"
import { Alchemist } from "./alchemist"
import { Material } from "../../../shared/Material"

export function alchemistModifiers(alchemist: Alchemist) {
  if (alchemist.roll.size > 80) {
    alchemist.roll.activity -= 4
  } else if (alchemist.roll.size > 70) {
    alchemist.roll.activity -= 3
  } else if (alchemist.roll.size > 60) {
    alchemist.roll.activity -= 1
  } else if (alchemist.roll.size > 30) {
    alchemist.roll.activity += 1
  } else if (alchemist.roll.size > 20) {
    alchemist.roll.activity += 1
  } else {
    alchemist.roll.activity += 3
  }

  switch (alchemist.material) {
    case Material.HewnRock:
      alchemist.roll.roughness += 3
      break
    case Material.ChiseledStone:
      alchemist.roll.roughness -= 1
      break
    case Material.Marble:
      alchemist.roll.cleanliness += 5
      alchemist.roll.wealth += 6
      break
  }

  if (alchemist.roll.cleanliness > 80) {
    alchemist.roll.expertise += 10
    alchemist.roll.activity += 6
  } else if (alchemist.roll.cleanliness > 70) {
    alchemist.roll.expertise += 7
    alchemist.roll.activity += 4
  } else if (alchemist.roll.cleanliness > 60) {
    alchemist.roll.expertise += 3
    alchemist.roll.activity += 3
  } else if (alchemist.roll.cleanliness > 50) {
    alchemist.roll.expertise += 1
  } else if (alchemist.roll.cleanliness > 40) {
    alchemist.roll.expertise -= 1
  } else if (alchemist.roll.cleanliness > 30) {
    alchemist.roll.expertise -= 3
    alchemist.roll.activity -= 2
  } else if (alchemist.roll.cleanliness > 20) {
    alchemist.roll.expertise -= 5
    alchemist.roll.activity -= 6
  } else {
    alchemist.roll.expertise -= 7
    alchemist.roll.activity -= 10
  }

  if (alchemist.roll.wealth > 95) {
    alchemist.priceModifier += 4
    alchemist.roll.size += 3
    alchemist.roll.cleanliness += 15
    alchemist.roll.reputation += 10
  } else if (alchemist.roll.wealth > 80) {
    alchemist.priceModifier += 3
    alchemist.roll.cleanliness += 10
    alchemist.roll.reputation += 7
  } else if (alchemist.roll.wealth > 70) {
    alchemist.priceModifier += 2
    alchemist.roll.cleanliness += 6
    alchemist.roll.reputation += 4
  } else if (alchemist.roll.wealth > 60) {
    alchemist.priceModifier += 1
    alchemist.roll.population += 5
    alchemist.roll.cleanliness += 4
  } else if (alchemist.roll.wealth > 50) {
    alchemist.roll.population += 5
    alchemist.roll.reputation -= 5
    alchemist.roll.cleanliness += 2
  } else if (alchemist.roll.wealth > 30) {
    alchemist.priceModifier -= 1
    alchemist.roll.reputation -= 7
    alchemist.roll.cleanliness -= 15
  } else {
    alchemist.priceModifier -= 2
    alchemist.roll.reputation -= 10
    alchemist.roll.cleanliness -= 25
  }

  if (alchemist.roll.activity > 80) {
    alchemist.activity = Activity.ExtremelyBusy
    alchemist.roll.reputation += 5
    alchemist.roll.cleanliness -= 5
  } else if (alchemist.roll.activity > 70) {
    alchemist.activity = Activity.VeryBusy
    alchemist.roll.reputation += 3
    alchemist.roll.cleanliness -= 3
  } else if (alchemist.roll.activity > 60) {
    alchemist.activity = Activity.RatherBusy
    alchemist.roll.reputation += 2
    alchemist.roll.cleanliness -= 2
  } else if (alchemist.roll.activity > 50) {
    alchemist.activity = Activity.ReasonablyBusy
    alchemist.roll.reputation += 1
    alchemist.roll.cleanliness -= 1
  } else if (alchemist.roll.activity > 40) {
    alchemist.activity = Activity.NotTerriblyBusy
    alchemist.roll.reputation -= 1
    alchemist.roll.cleanliness += 1
  } else if (alchemist.roll.activity > 30) {
    alchemist.activity = Activity.NotBusy
    alchemist.roll.reputation -= 2
    alchemist.roll.cleanliness += 2
  } else if (alchemist.roll.activity > 20) {
    alchemist.activity = Activity.RatherQuiet
    alchemist.roll.reputation -= 3
    alchemist.roll.cleanliness += 3
  } else {
    alchemist.activity = Activity.VeryQuiet
    alchemist.roll.reputation -= 5
    alchemist.roll.cleanliness += 5
  }

  return alchemist
}
