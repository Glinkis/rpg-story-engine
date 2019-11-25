import { factionData } from "./factionData"
import { fm } from "../math"
import { Faction } from "./createFaction"
import { dice, randomRange, pluck } from "../rolls"

export function resourcesFaction(faction: Faction) {
  const resourcesList = [
    `old favours`,
    `chests of gold`,
    `gems`,
    `contacts`,
    `shinies`,
    `debtors`,
    `trade goods`,
    `artifacts`,
    `magic trinkets`,
    `magic weapons`,
    `magic scrolls`,
    `bits of blackmail material`,
  ]
  const groupSizeModifier = faction.roll.resources - 50 + (faction.roll.reputation - 50 + (faction.roll.size - 50)) / 2
  let resources = ``
  let i
  // this is where weighting different groups happens. Needs updating with each new faction.
  resourcesList.concat(factionData.type[faction.type].resources)

  if (faction.roll.age > 95) {
    faction.roll.resources += fm(faction.roll.resources, 35)
  } else if (faction.roll.age > 90) {
    faction.roll.resources += fm(faction.roll.resources, 30)
  } else if (faction.roll.age > 80) {
    faction.roll.resources += fm(faction.roll.resources, 25)
  } else if (faction.roll.age > 70) {
    faction.roll.resources += fm(faction.roll.resources, 20)
  } else if (faction.roll.age > 60) {
    faction.roll.resources += fm(faction.roll.resources, 15)
  } else if (faction.roll.age > 55) {
    faction.roll.resources += fm(faction.roll.resources, 10)
  } else if (faction.roll.age > 50) {
    faction.roll.resources += fm(faction.roll.resources, 5)
  } else if (faction.roll.age > 45) {
    faction.roll.resources += fm(faction.roll.resources, -5)
  } else if (faction.roll.age > 40) {
    faction.roll.resources += fm(faction.roll.resources, -10)
  } else if (faction.roll.age > 30) {
    faction.roll.resources += fm(faction.roll.resources, -15)
  } else if (faction.roll.age > 20) {
    faction.roll.resources += fm(faction.roll.resources, -20)
  } else if (faction.roll.age > 10) {
    faction.roll.resources += fm(faction.roll.resources, -30)
  } else if (faction.roll.age <= 5) {
    faction.roll.resources += fm(faction.roll.resources, -40)
  } else {
    faction.roll.resources += fm(faction.roll.resources, 10)
  }

  // if (faction.roll.age > 95) {
  //   faction.roll.resources += 15
  // } else if (faction.roll.age > 90) {
  //   faction.roll.resources += 10
  // } else if (faction.roll.age > 80) {
  //   faction.roll.resources += 8
  // } else if (faction.roll.age > 70) {
  //   faction.roll.resources += 6
  // } else if (faction.roll.age > 60) {
  //   faction.roll.resources += 4
  // } else if (faction.roll.age > 55) {
  //   faction.roll.resources += 2
  // } else if (faction.roll.age > 50) {
  //   faction.roll.resources += 1
  // } else if (faction.roll.age > 45) {
  //   faction.roll.resources += -1
  // } else if (faction.roll.age > 40) {
  //   faction.roll.resources += -2
  // } else if (faction.roll.age > 30) {
  //   faction.roll.resources += -4
  // } else if (faction.roll.age > 20) {
  //   faction.roll.resources += -6
  // } else if (faction.roll.age > 10) {
  //   faction.roll.resources += -8
  // } else if (faction.roll.age <= 5) {
  //   faction.roll.resources += -10
  // } else {
  //   faction.roll.resources += 10
  // }

  if (faction.roll.resources > 95) {
    faction.resourcesDescription = `limitless`
    for (i = 1; i <= 5; ++i) {
      faction.resources.push(getResources(randomRange(-10, 15)))
    }
  } else if (faction.roll.resources > 90) {
    faction.resourcesDescription = `near limitless`
    for (i = 1; i <= 4; ++i) {
      faction.resources.push(getResources(randomRange(-10, 10)))
    }
  } else if (faction.roll.resources > 80) {
    faction.resourcesDescription = `extensive`
    for (i = 1; i <= 4; ++i) {
      faction.resources.push(getResources(randomRange(-15, 5)))
    }
  } else if (faction.roll.resources > 70) {
    faction.resourcesDescription = `significant`
    for (i = 1; i <= 4; ++i) {
      faction.resources.push(getResources(randomRange(-20, 5)))
    }
  } else if (faction.roll.resources > 60) {
    faction.resourcesDescription = `many`
    for (i = 1; i <= 3; ++i) {
      faction.resources.push(getResources(randomRange(-10, 5)))
    }
  } else if (faction.roll.resources > 55) {
    faction.resourcesDescription = `decent`
    for (i = 1; i <= 3; ++i) {
      faction.resources.push(getResources(randomRange(-15, 5)))
    }
  } else if (faction.roll.resources > 50) {
    faction.resourcesDescription = `average`
    for (i = 1; i <= 3; ++i) {
      faction.resources.push(getResources(randomRange(-20, 5)))
    }
  } else if (faction.roll.resources > 45) {
    faction.resourcesDescription = `slightly below average`
    faction.resources.push(getResources(randomRange(10, 15)))
    faction.resources.push(getResources(randomRange(-20, 5)))
    faction.resources.push(getResources(randomRange(-20, -5)))
  } else if (faction.roll.resources > 40) {
    faction.resourcesDescription = `somewhat limited`
    faction.resources.push(getResources(randomRange(5, 15)))
    faction.resources.push(getResources(randomRange(-20, 0)))
  } else if (faction.roll.resources > 30) {
    faction.resourcesDescription = `limited`
    faction.resources.push(getResources(randomRange(5, 10)))
    faction.resources.push(getResources(randomRange(-20, 0)))
  } else if (faction.roll.resources > 20) {
    faction.resourcesDescription = `quite poor`
    faction.resources.push(getResources(randomRange(5, 15)))
    faction.resources.push(getResources(randomRange(-20, 0)))
  } else if (faction.roll.resources > 10) {
    faction.resourcesDescription = `extremely poor`
    faction.resources.push(getResources(randomRange(-15, 5)))
    faction.resources.push(getResources(randomRange(-20, 0)))
  } else if (faction.roll.resources <= 5) {
    faction.resourcesDescription = `destitute`
    faction.resources.push(getResources(randomRange(-20, -10)))
    faction.resources.push(getResources(randomRange(-30, -10)))
  } else {
    faction.resourcesDescription = `average`
  }

  function getResources(bonus: number) {
    // TODO: change faction resources from a string to an array to support multiple types of resource
    // i.e. end result should be something like ['a couple contacts', 'more than enough shinies]
    let tempGroupSize
    const groupSizeRoll = dice(2, 50) + (groupSizeModifier + bonus)
    if (groupSizeRoll >= 90) {
      tempGroupSize = `an enormous amount of `
    } else if (groupSizeRoll >= 80) {
      tempGroupSize = `more than enough `
    } else if (groupSizeRoll >= 70) {
      tempGroupSize = `a large number of `
    } else if (groupSizeRoll >= 60) {
      tempGroupSize = `quite a few `
    } else if (groupSizeRoll >= 50) {
      tempGroupSize = `more than a couple `
    } else if (groupSizeRoll >= 40) {
      tempGroupSize = `a couple `
    } else if (groupSizeRoll >= 30) {
      tempGroupSize = `some `
    } else if (groupSizeRoll >= 20) {
      tempGroupSize = `a few `
    } else if (groupSizeRoll >= 10) {
      tempGroupSize = `a handful of `
    } else {
      tempGroupSize = `some `
    }

    resources = tempGroupSize + pluck(resourcesList)
    return resources
  }
  faction.resources = resources
  return faction
}
