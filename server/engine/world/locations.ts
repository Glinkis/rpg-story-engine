import { misc } from "./miscData"
import { encounters } from "./encounters"
import { randomValue } from "../rolls"
import { contentsFetcher } from "../tools/contentsFetcher"
import { Biome } from "../../../shared/types"
import { religion } from "./religion"
import { cavern } from "./cavern"
import { caravan } from "./caravan"
import { mountain } from "./mountain"
import { desert } from "./desert"

type Location = (town: any, biome: Biome) => string

export const locations: Record<string, Location> = {
  "a cavern behind a waterfall"(town, biome) {
    const cavern = misc.cavern.create({ entrance: `somewhat hidden behind a roaring waterfall` })
    const contents = contentsFetcher(town, biome, misc[biome].cave, encounters)
    return `a cavern. ${cavern.readout} The cavern is now home to ${contents}.`
  },
  "a small cave in the bank of a creek"(town, biome) {
    const cave = cavern.create({ entrance: `in the bank of a creek` })
    const contents = contentsFetcher(town, biome, misc[biome].cave, encounters)
    return `a small cave. ${cavern.readout(cave)} The cave is home to ${contents}.`
  },
  "an entrance to a rocky cave"(town, biome) {
    const cave = cavern.create()
    const contents = contentsFetcher(town, biome, misc[biome].cave, encounters)
    return `a rocky cave. ${cavern.readout(cave)} The cave is home to ${contents}.`
  },
  "a hole under a large tree"(town, biome) {
    let contents = randomValue(misc[biome].hole)
    // this is lazy. Will change hole from an array to an object once I make more creators.
    if (contents === `a spider`) {
      const spider = misc.spider.create()
      contents = `a ${spider.tippyWord}.`
    }
    const tree = misc.tree.create(town, biome)
    return `a hole under a large ${tree.tippyWord}. Inside is ${contents}.`
  },
  "a hole under a sheer cliff"(town, biome) {
    const contents = randomValue(misc[biome].hole)
    return `a hole under a sheer cliff. Inside is ${contents}.`
  },
  "a hole under a sheer cliff face"(town, biome) {
    const contents = randomValue(misc[biome].hole)
    return `a hole under a sheer cliff face. Inside is ${contents}.`
  },
  "a large burrow"(town, biome) {
    const contents = randomValue(misc[biome].hole)
    return `a large burrow. Inside is ${contents}.`
  },
  "a peculiar cottage"(town, biome) {
    const contents = contentsFetcher(town, biome, misc[biome].cottageLives, encounters)
    const cabin = misc.cabin.create(town, biome, {
      wordNoun: `cottage`,
    })
    return `a peculiar ${cabin.tippyWord}. ${contents} lives here.`
  },
  "a woodsman's cabin"(town, biome) {
    const contents = contentsFetcher(town, biome, misc[biome].cabinLives, encounters)
    const cabin = misc.cabin.create(town, biome)
    const lived = randomValue(misc[biome].cabinLived)
    return `a woodsman's ${cabin.tippyWord}. ${lived} once lived here. Now, ${contents} lives here.`
  },
  "a cozy little cabin"(town, biome) {
    const contents = contentsFetcher(town, biome, misc[biome].cabinLives, encounters)
    const lived = randomValue(misc[biome].cabinLived)
    const cabin = misc.cabin.create(town, biome, {
      wordNoun: `cabin`,
      size: `little`,
    })
    return `a cozy little ${cabin.tippyWord}. ${lived} once lived here. Now, ${contents} lives here.`
  },
  "an abandoned cabin"(town, biome) {
    const contents = contentsFetcher(town, biome, misc[biome].cabinLives, encounters)
    const lived = randomValue(misc[biome].cabinLived)
    const cabin = misc.cabin.create(town, biome)
    return `an abandoned ${cabin.tippyWord}. ${lived} once lived here. Now, ${contents} lives here.`
  },
  "an abandoned campsite"(town, biome) {
    const contents = contentsFetcher(town, biome, misc[biome].camped, encounters)
    return `an abandoned campsite, which looks to have been occupied previously by ${contents}`
  },
  "a sacred grove"() {
    return `a sacred grove.`
  },
  "a shrine"(town) {
    const shrine = religion.shrine.create(town)
    return `a shrine dedicated to ${shrine.god}. The shrine is ${shrine.material} ${shrine.senses}`
  },
  "a grave with an illegible headstone"() {
    return `a grave with an illegible headstone.`
  },
  "ancient ruins"(town, biome) {
    const contents = contentsFetcher(town, biome, misc[biome].ruinsLives, encounters)
    const lived = randomValue(misc[biome].ruinsLived)
    return `ancient ruins. The ruins were built by ${lived}. Now, ${contents} lives here.`
  },
  "a cavern in a canyon wall"(town, biome) {
    const cave = cavern.create({ entrance: `in a canyon wall` })
    const encounter = contentsFetcher(town, biome, misc[biome].encounters, encounters)
    return `a cavern. ${cavern.readout(cave)} The cavern is home to ${encounter}.`
  },
  "a cave entrance, hidden by a boulder"(town, biome) {
    const cave = cavern.create({ entrance: `hidden by a boulder` })
    const encounter = contentsFetcher(town, biome, misc[biome].encounters, encounters)
    return `a cavern. ${cavern.readout(cave)} The cavern is home to ${encounter}.`
  },
  "a small cave in the crook of a rock wall"(town, biome) {
    const cave = cavern.create({ entrance: `in the crook of a rock wall` })
    const contents = contentsFetcher(town, biome, misc[biome].cave, encounters)
    return `a small cave. ${cavern.readout(cave)} The cave is home to ${contents}.`
  },
  "a small cave next to a dry river bed"(town, biome) {
    const cave = cavern.create()
    const encounter = contentsFetcher(town, biome, misc[biome].encounters, encounters)
    return `a cavern. ${cavern.readout(cave)} The cavern is home to ${encounter}.`
  },
  // mining is intentionally using the mountain biome
  "an old mine in a canyon"() {
    const miners = randomValue(mountain.miners)
    const goal = randomValue(mountain.minersGoal)
    return `an old mine in a canyon. The mine was built by by ${miners}, looking for ${goal}.`
  },
  "an active mining camp"() {
    const miners = randomValue(mountain.miners)
    const goal = randomValue(mountain.minersGoal)
    return `an active mining camp, manned by ${miners}, looking for ${goal}`
  },
  "a hole under a large boulder"() {
    const content = randomValue(desert.hole)
    return `a hole under a large boulder. Inside is ${content}.`
  },
  "an abandoned stone house"(town, biome) {
    const lived = randomValue(misc[biome].houseLived)
    const encounter = contentsFetcher(town, biome, misc[biome].houseLives, encounters)
    const cabin = misc.cabin.create(town, biome, {
      material: `stone`,
      wordNoun: `house`,
    })
    return `an abandoned ${cabin.tippy} stone house. ${lived} once lived here. Now, ${encounter} lives here.`
  },
  "a stone house"(town, biome) {
    const lived = randomValue(misc[biome].houseLived)
    const shelter = randomValue([`canyon`, `gorge`, `bluff`])
    const encounter = contentsFetcher(town, biome, misc[biome].houseLives, encounters)
    const cabin = misc.cabin.create(town, biome, {
      material: `stone`,
      wordNoun: `house`,
    })
    return `a ${cabin.tippy} stone house sheltered by a ${shelter}. ${lived} once lived here. Now, ${encounter} lives here.`
  },
  "a merchant caravan's camp"(town) {
    return `a merchant caravan's camp. ${caravan.readout(caravan.create(town))}`
  },
  "a peculiar tent"(town, biome) {
    const lived = randomValue(misc[biome].camped)
    return `an peculiar tent, which looks to have been occupied previously by ${lived}`
  },
  "an old watchtower"(town, biome) {
    // intentionally uses the mountain biome
    const encounter = contentsFetcher(town, biome, mountain.watchtowerLives, encounters)
    const built = randomValue(mountain.watchtowerBuilt)
    return `an old, weathered watchtower. The watchtower was built by ${built}. Now, it is controlled by ${encounter}.`
  },
  "an abandoned watchtower"(town, biome) {
    // intentionally uses the mountain biome
    const encounter = contentsFetcher(town, biome, mountain.watchtowerLives, encounters)
    const built = randomValue(mountain.watchtowerBuilt)
    return `a run down, abandoned watchtower. The watchtower was built by ${built}. Now, it is inhabited by ${encounter}.`
  },
  "a strategically located watchtower"(town, biome) {
    // intentionally uses the mountain biome
    const encounter = contentsFetcher(town, biome, mountain.watchtowerLives, encounters)
    const built = randomValue(mountain.watchtowerBuilt)
    return `a strategically located watchtower. The watchtower was built by ${built}. Now, it is controlled by ${encounter}.`
  },
  "ruins of an ancient city"(town, biome) {
    const encounter = contentsFetcher(town, biome, misc[biome].ruinsLives, encounters)
    const lived = randomValue(misc[biome].ruinsLived)
    return `ruins of an ancient city. The city was built by ${lived} Now, ${encounter} lives here.`
  },
  "a temple ruin"(town, biome) {
    const encounter = contentsFetcher(town, biome, misc[biome].ruinsLives, encounters)
    const lived = randomValue(misc[biome].ruinsLived)
    return `a temple ruin. The city was built by ${lived} Now, ${encounter} lives here.`
  },
  "an isolated monastery"(town, biome) {
    const lives = randomValue(misc[biome].religionLives)
    return `an isolated monastery. Living inside lives ${lives}, hiding from the outside world.`
  },
  "a remote temple"(town, biome) {
    const lives = randomValue(misc[biome].religionLives)
    return `a remote temple. Far from any civilization, this temple is home to ${lives} who have gone to great measures to hide their existence.`
  },
  "an ancient temple"(town, biome) {
    const lives = randomValue(misc[biome].religionLives)
    return `an incredibly ancient temple. This ancient place has housed many things, but it is currently home to ${lives}.`
  },
  "a ruined monastery"(town, biome) {
    const encounter = contentsFetcher(town, biome, misc[biome].ruinsLives, encounters)
    return `a ruined monastery. These ruins are currently occupied by ${encounter}.`
  },
  "a village of primitive canyon dwellers"() {
    return `a village of primitive canyon dwellers`
  },
  "some nomad's camp"() {
    return `some nomad's camp`
  },
  "an ancient tomb"() {
    return `an ancient tomb`
  },
  "a dark tunnel leading under the mountain"() {
    return `a dark tunnel leading under the mountain`
  },
  "a tunnel in a cliff face"() {
    return `a tunnel in a cliff face`
  },
  "a tunnel leading into an abandoned mine"() {
    return `a tunnel leading into an abandoned mine`
  },
  "an enormous bird’s nest"() {
    return `the nest of an enormous bird`
  },
  "a poorly marked grave or tomb"() {
    return `a crudely marked grave of someone long gone`
  },
}
