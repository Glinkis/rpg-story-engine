import { misc } from "./miscData"
import { encounters } from "./encounters"
import { randomValue } from "../rolls"

export const locations = {
  "a cavern behind a waterfall"(town: any, biome: string) {
    const cavern = misc.cavern.create({ entrance: "somewhat hidden behind a roaring waterfall" })
    const contents = setup.contentsFetcher(town, biome, misc[biome].cave, encounters)
    return "a cavern. " + cavern.readout + " <blockquote>The cavern is now home to " + contents + ".</blockquote>"
  },
  "a small cave in the bank of a creek"(town: any, biome: string) {
    const cavern = misc.cavern.create({ entrance: "in the bank of a creek" })
    const contents = setup.contentsFetcher(town, biome, misc[biome].cave, encounters)
    return "a small cave. " + cavern.readout + " <blockquote>The cave is home to " + contents + ".</blockquote>"
  },
  "an entrance to a rocky cave"(town: any, biome: string) {
    const cavern = misc.cavern.create()
    const contents = setup.contentsFetcher(town, biome, misc[biome].cave, encounters)
    return "a rocky cave. " + cavern.readout + " <blockquote>The cave is home to " + contents + ".</blockquote>"
  },
  "a hole under a large tree"(town: any, biome: string) {
    let contents = randomValue(misc[biome].hole)
    // this is lazy. Will change hole from an array to an object once I make more creators.
    if (contents === "a spider") {
      const spider = misc.spider.create()
      contents = "a " + spider.tippyWord + "."
    }
    const tree = misc.tree.create(town, biome)
    // let contents = setup.contentsFetcher(town, biome, setup.misc[biome].hole, setup.misc[biome].hole)
    return "a hole under a large " + tree.tippyWord + ". <blockquote>Inside is " + contents + ".</blockquote>"
  },
  "a hole under a sheer cliff"(town: any, biome: string) {
    const contents = randomValue(misc[biome].hole)
    return "a hole under a sheer cliff. <blockquote> Inside is " + contents + ".</blockquote>"
  },
  "a hole under a sheer cliff face"(town: any, biome: string) {
    const contents = randomValue(misc[biome].hole)
    return "a hole under a sheer cliff face. <blockquote> Inside is " + contents + ".</blockquote>"
  },
  "a large burrow"(town: any, biome: string) {
    const contents = randomValue(misc[biome].hole)
    // let contents = setup.contentsFetcher(town, biome, setup.misc[biome].hole, setup.misc[biome].hole)
    return "a large burrow <blockquote>Inside is " + contents + ".</blockquote>"
  },
  "a peculiar cottage"(town: any, biome: string) {
    const contents = setup.contentsFetcher(town, biome, misc[biome].cottageLives, encounters)
    const cabin = misc.cabin.create(town, biome, {
      wordNoun: "cottage",
    })
    return `a peculiar ${cabin.tippyWord}. <blockquote>${contents} lives here.</blockquote>`
  },
  "a woodsman's cabin"(town: any, biome: string) {
    const contents = setup.contentsFetcher(town, biome, misc[biome].cabinLives, encounters)
    const cabin = misc.cabin.create(town, biome)
    const lived = randomValue(misc[biome].cabinLived)
    return `a woodsman's ${cabin.tippyWord}. <blockquote>${lived} once lived here. Now, ${contents} lives here.</blockquote>`
  },
  "a cozy little cabin"(town: any, biome: string) {
    const contents = setup.contentsFetcher(town, biome, misc[biome].cabinLives, encounters)
    const lived = randomValue(misc[biome].cabinLived)
    const cabin = misc.cabin.create(town, biome, {
      wordNoun: "cabin",
      size: "little",
    })
    return `a cozy little ${cabin.tippyWord}. <blockquote>${lived} once lived here. Now, ${contents} lives here.</blockquote>`
  },
  "an abandoned cabin"(town: any, biome: string) {
    const contents = setup.contentsFetcher(town, biome, misc[biome].cabinLives, encounters)
    const lived = randomValue(misc[biome].cabinLived)
    const cabin = misc.cabin.create(town, biome)
    return `an abandoned ${cabin.tippyWord}. <blockquote>${lived} once lived here. Now, ${contents} lives here.</blockquote>`
  },
  "an abandoned campsite"(town: any, biome: string) {
    const contents = setup.contentsFetcher(town, biome, misc[biome].camped, encounters)
    return "an abandoned campsite, which looks to have been occupied previously by " + contents
  },
  "a sacred grove"() {
    return "a sacred grove."
  },
  "a shrine"(town: any, biome: string) {
    const shrine = misc.religion.shrine.create(town)
    return "a shrine dedicated to " + shrine.god + ". The shrine is " + shrine.material + " " + shrine.senses
  },
  "a grave with an illegible headstone"() {
    return "a grave with an illegible headstone."
  },
  "ancient ruins"(town: any, biome: string) {
    const contents = setup.contentsFetcher(town, biome, misc[biome].ruinsLives, encounters)
    return (
      "ancient ruins. <blockquote>The ruins were built by " +
      randomValue(misc[biome].ruinsLived) +
      ". Now, " +
      contents +
      " lives here.</blockquote>"
    )
  },
  "a cavern in a canyon wall"(town: any, biome: string) {
    const cavern = misc.cavern.create({ entrance: "in a canyon wall" })
    const encounter = setup.contentsFetcher(town, biome, misc[biome].encounter, encounters)
    return "a cavern. " + cavern.readout + " <blockquote>The cavern is home to " + encounter + ".</blockquote>"
  },
  "a cave entrance, hidden by a boulder"(town: any, biome: string) {
    const cavern = misc.cavern.create({ entrance: "hidden by a boulder" })
    const encounter = setup.contentsFetcher(town, biome, misc[biome].encounter, encounters)
    return "a cavern. " + cavern.readout + " <blockquote>The cavern is home to " + encounter + ".</blockquote>"
  },
  "a small cave in the crook of a rock wall"(town: any, biome: string) {
    const cavern = misc.cavern.create({ entrance: "in the crook of a rock wall" })
    const contents = setup.contentsFetcher(town, biome, misc[biome].cave, encounters)
    return "a small cave. " + cavern.readout + " <blockquote>The cave is home to " + contents + ".</blockquote>"
  },
  "a small cave next to a dry river bed"(town: any, biome: string) {
    const cavern = misc.cavern.create()
    const encounter = setup.contentsFetcher(town, biome, misc[biome].encounter, encounters)
    return "a cavern. " + cavern.readout + " <blockquote>The cavern is home to " + encounter + ".</blockquote>"
  },
  // mining is intentionally using the mountain biome
  "an old mine in a canyon"(town: any, biome: string) {
    return `an old mine in a canyon <blockquote>The mine was built by by ${randomValue(
      misc.mountain.miners
    )}, looking for ${randomValue(misc.mountain.minersGoal)}.</blockquote>`
  },
  "an active mining camp"(town: any, biome: string) {
    return `an active mining camp, manned by ${randomValue(misc.mountain.miners)}, looking for ${randomValue(
      misc.mountain.minersGoal
    )}`
  },
  "a hole under a large boulder"(town: any, biome: string) {
    return "a hole under a large boulder <blockquote> Inside is " + randomValue(misc.desert.hole) + "</blockquote>"
  },
  "an abandoned stone house"(town: any, biome: string) {
    const lived = misc[biome].houseLived.seededrandom()
    const encounter = setup.contentsFetcher(town, biome, misc[biome].houseLives, encounters)
    const cabin = misc.cabin.create(town, biome, {
      material: "stone",
      wordNoun: "house",
    })
    return `an abandoned ${cabin.tippy}<b>stone house</b></span>. <blockquote>${lived} once lived here. Now, ${encounter} lives here.</blockquote>`
  },
  "a stone house"(town: any, biome: string) {
    const lived = randomValue(misc[biome].houseLived)
    const shelter = randomValue(["canyon", "gorge", "bluff"])
    const encounter = setup.contentsFetcher(town, biome, misc[biome].houseLives, encounters)
    const cabin = misc.cabin.create(town, biome, {
      material: "stone",
      wordNoun: "house",
    })
    return `a ${cabin.tippy}<b>stone house</b></span> sheltered by a ${shelter}<blockquote>${lived} once lived here. Now, ${encounter} lives here.</blockquote>`
  },
  "a merchant caravan's camp"(town: any, biome: string) {
    const caravan = misc.caravan.create(town)
    return `a merchant caravan's camp. ${caravan.readout}`
  },
  "a peculiar tent"(town: any, biome: string) {
    const lived = misc[biome].camped.seededrandom()
    return `an peculiar tent, which looks to have been occupied previously by ${lived}`
  },
  "an old watchtower"(town: any, biome: string) {
    // intentionally uses the mountain biome
    const encounter = setup.contentsFetcher(town, biome, misc.mountain.watchtowerLives, encounters)
    const built = randomValue(misc.mountain.watchtowerBuilt)
    return `an old, weathered watchtower. <blockquote>The watchtower was built by ${built}. Now, it is controlled by ${encounter}.</blockquote>`
  },
  "an abandoned watchtower"(town: any, biome: string) {
    // intentionally uses the mountain biome
    const encounter = setup.contentsFetcher(town, biome, misc.mountain.watchtowerLives, encounters)
    const built = randomValue(misc.mountain.watchtowerBuilt)
    return `a run down, abandoned watchtower. <blockquote>The watchtower was built by ${built}. Now, it is inhabited by ${encounter}.</blockquote>`
  },
  "a strategically located watchtower"(town: any, biome: string) {
    // intentionally uses the mountain biome
    const encounter = setup.contentsFetcher(town, biome, misc.mountain.watchtowerLives, encounters)
    const built = randomValue(misc.mountain.watchtowerBuilt)
    return `a strategically located watchtower. <blockquote>The watchtower was built by ${built}. Now, it is controlled by ${encounter}.</blockquote>`
  },
  "ruins of an ancient city"(town: any, biome: string) {
    const encounter = setup.contentsFetcher(town, biome, misc[biome].ruinsLives, encounters)
    const lived = randomValue(misc[biome].ruinsLived)
    return `ruins of an ancient city. <blockquote>The city was built by ${lived} Now, ${encounter} lives here.</blockquote>`
  },
  "a temple ruin"(town: any, biome: string) {
    const encounter = setup.contentsFetcher(town, biome, misc[biome].ruinsLives, encounters)
    const lived = randomValue(misc[biome].ruinsLived)
    return `a temple ruin. <blockquote>The city was built by ${lived} Now, ${encounter} lives here.</blockquote>`
  },
  "an isolated monastery"(town: any, biome: string) {
    const lives = randomValue(misc[biome].religionLives)
    return `an isolated monastery. <blockquote>Living inside lives ${lives}, hiding from the outside world.</blockquote>`
  },
  "a remote temple"(town: any, biome: string) {
    const lives = randomValue(misc[biome].religionLives)
    return `a remote temple. <blockquote>Far from any civilization, this temple is home to ${lives} who have gone to great measures to hide their existence.</blockquote>`
  },
  "an ancient temple"(town: any, biome: string) {
    const lives = randomValue(misc[biome].religionLives)
    return `an incredibly ancient temple. <blockquote>This ancient place has housed many things, but it is currently home to ${lives}.</blockquote>`
  },
  "a ruined monastery"(town: any, biome: string) {
    const encounter = setup.contentsFetcher(town, biome, misc[biome].ruinsLives, encounters)
    return "a ruined monastery. <blockquote>These ruins are currently occupied by " + encounter + ".</blockquote>"
  },
  "a village of primitive canyon dwellers"(town: any, biome: string) {
    return "a village of primitive canyon dwellers"
  },
  "some nomad's camp"(town: any, biome: string) {
    return "some nomad's camp"
  },
  "an ancient tomb"(town: any, biome: string) {
    return "an ancient tomb"
  },
  "a dark tunnel leading under the mountain"(town: any, biome: string) {
    return "a dark tunnel leading under the mountain"
  },
  "a tunnel in a cliff face"(town: any, biome: string) {
    return "a tunnel in a cliff face"
  },
  "a tunnel leading into an abandoned mine"(town: any, biome: string) {
    return "a tunnel leading into an abandoned mine"
  },
  "an enormous bird’s nest"(town: any, biome: string) {
    return "the nest of an enormous bird"
  },
  "a poorly marked grave or tomb"(town: any, biome: string) {
    return "a crudely marked grave of someone long gone"
  },
}
