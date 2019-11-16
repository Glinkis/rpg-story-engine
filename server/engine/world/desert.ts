import { Town } from "../town/town"
import { randomRange, randomValue } from "../rolls"
import { misc } from "./miscData"
import { locations } from "./locations"
import { Biome } from "../../../shared/types"
import { encounters } from "./encounters"
import { rt } from "../tools/randomTemplate"

export interface Desert {
  readonly encounter: string
  readonly landmark: string
  readonly feature: string
}

export const desert = {
  create(town: Town, base?: Partial<Desert>): Desert {
    let encounter: string
    let encounterKey: string

    if (randomRange(1, 100) >= 50) {
      encounterKey = randomValue(misc.desert.location)
      encounter = locations[encounterKey](town, Biome.Desert)
    } else {
      encounterKey = randomValue(misc.desert.encounters)
      encounter = encounters[encounterKey](town)
    }

    return {
      encounter,
      landmark: randomValue(this.landmark),
      feature: randomValue(this.feature),
      ...base,
    }
  },

  readout(desert: Desert) {
    const as = [`While`, `As`, `After a while, as`]
    const walk = [`traverse`, `trudge along`, `travel across`, `walk across`]

    return rt`${as} you ${walk} the desert, you see ${desert.landmark}. You notice ${desert.feature}. Up ahead, you see ${desert.encounter}.`
  },
  location: [
    `a cavern in a canyon wall`,
    `a cave entrance, hidden by a boulder`,
    `an entrance to a rocky cave`,
    `a small cave next to a dry river bed`,
    `an old mine in a canyon`,
    `an active mining camp`,
    `a hole under a large boulder`,
    `a large burrow`,
    `an abandoned stone house`,
    `a stone house`,
    `an abandoned campsite`,
    `a merchant caravan's camp`,
    `a peculiar tent`,
    `an old watchtower`,
    `ruins of an ancient city`,
    `a temple ruin`,
    `a village of primitive canyon dwellers`,
    `some nomad's camp`,
    `an ancient tomb`,
    `a shrine`,
  ],
  landmark: [
    `an oasis with a fruit tree`,
    `an oasis with a palm tree and some desert flowers`,
    `an unusually large, prickly desert plant`,
    `a pair of prickly plants from the same root`,
    `a patch of desert flowers in the shade of a boulder`,
    `a patch of damp sand in the shadow of a large boulder`,
    `a rocky bluff`,
    `a boulder shaped like a face`,
    `a pair of identical boulders, side by side`,
    `a boulder sitting atop a larger boulder`,
    `a narrow gorge with a trickle of water`,
    `a wide canyon with a trickle of water`,
    `a dry river bed`,
    `a swiftly flowing, shallow river in a canyon`,
    `a muddy river bed`,
    `a ridge of wind-eroded rock`,
    `a ridge of jagged rock`,
    `a mostly-buried, ancient monument`,
    `twelve large stones, deliberately arranged in a ring`,
    `a sheer rock wall with patterns of color in the rock layers`,
  ],
  feature: [
    `a buzzard circles overhead`,
    `a vulture screams`,
    `a scorpion scuttles away`,
    `a large beetle scuttles away`,
    `a toad hops behind a rock`,
    `a lizard crawls under a rock`,
    `a jackal barks`,
    `a snake slithers away`,
    `a butterfly flutters by`,
    `a rattlesnake sounds`,
    `an unusual bird chirps`,
    `a gentle breeze blows`,
    `the wind blows harder`,
    `the wind kicks up dust`,
    `small loose stones tumble down a slope`,
    `a hint of moisture on the ground`,
    `a prickly plant with brightly colored fruit`,
    `a strange desert flower`,
    `a small palm tree`,
    `several small prickly plants`,
  ],
  landscape: [`rocky`, `hilly`, `bleak`, `rugged`, `boulder-strewn`, `forbidding`, `jagged`, `wind-swept`],
  ground: [`sandy`, `pebbly`, `cracked`, `hard-packed`, `pale brown`, `muddy brown`, `deep red`, `grey`],
  encounters: [
    `a strange hermit`,
    `a lost traveler`,
    `a poor nomad`,
    `a suspicious miner`,
    `a barbarian hunter`,
    `a mounted barbarian scout`,
    `an orkish war band`,
    `the ghost of a traveler`,
    `a poisonous snake`,
    `a giant spider`,
    `a giant scorpion`,
    `a giant centipede`,
    `a pack of jackals`,
    `a hungry jackalwere`,
    `a giant lizard`,
    `a pair of gnolls`,
    `a pair of bandits`,
    `an hobgoblin scout`,
    `a roc on the wing`,
    `a wyvern on the wing`,
  ],
  cave: [
    `a swarm of beetles`,
    `lots of bats`,
    `many spider webs`,
    `a troll's stash`,
    `an ogre's lair`,
    `some gnolls’ hideout`,
    `bare rock`,
    `mummified remains`,
    `some bandits’ hideout`,
    `a reclusive sorcerer`,
    `some abandoned mining equipment`,
    `a half-mad prophet`,
  ],
  camped: [
    `a merchant of exotic goods`,
    `a misanthropic shapeshifter`,
    `an eccentric monk`,
    `a nomadic herder`,
    `a nomadic warrior`,
    `an outcast elf`,
  ],
  houseLived: [
    `a strange hermit`,
    `a reclusive scholar`,
    `an eccentric healer`,
    `a poor goatherder`,
    `a mining prospector`,
    `a religious fanatic with his many wives`,
  ],
  houseLives: [
    `poisonous snakes`,
    `an ogre`,
    `a pair of orcs`,
    `a mad sorcerer`,
    `a paranoid shapeshifter`,
    `restless ghosts`,
  ],
  ruinsLives: [
    `a treasure hunter`,
    `a wasteland druid`,
    `poisonous snakes`,
    `cursed mummies`,
    `restless ghosts`,
    `a hobgoblin warlord`,
    `an orkish war chief`,
    `a tribe of kobolds`,
    `a territorial griffon`,
    `a pair of manticores`,
    `slavering gnolls`,
    `a dragon`,
  ],
  hazards: [
    `a rockslide coming down a canyon wall`,
    `a boulder rolling down a canyon wall`,
    `a collapsing sand dune`,
    `quicksand`,
    `persistent, strong winds kicking up dust`,
    `a sudden, swirling sandstorm`,
    `a mirage of a city`,
    `a mirage of an oasis`,
  ],
  climate: [
    `once a year for a few days straight`,
    `on a few days scattered through the year`,
    `during the winter months`,
    `never; but snow melting in the mountains waters the land briefly every spring`,
    `never; the land floods briefly once a year`,
    `never; this place hasn’t had water in years`,
  ],
  hole: [`a snake`, `a spider`, `beetles`, `scorpions`, `centipedes`, `a toad`, `a lizard`, `a fox`],
}
