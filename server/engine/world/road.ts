import { randomValue } from "../rolls"
import { encounters } from "./encounters"
import { rt } from "../tools/randomTemplate"
import { createTown } from "../town/createTown"

export interface Road {
  type: string
  traffic: string
  encounter: string
}

export const road = {
  create(town = createTown(), base?: Partial<Road>): Road {
    const type = randomValue([`trail`, `path`, `path`, `road`, `road`, `road`])
    const encounterKey = randomValue(this[type].encounters) as string
    const encounter = encounters[encounterKey]

    return {
      type: randomValue(this[type].type),
      traffic: randomValue(this[type].traffic),
      encounter: encounter(town),
      ...base,
    }
  },
  readout(road: Road) {
    return rt`${[
      `You walk along the`,
      `You trudge along the`,
      `Making your way across the countryside on the`,
      `You make your way along the`,
      `You walk along the`,
    ]} ${road.type}, ${road.traffic} ${[
      `until you come across`,
      `and encounter`,
      `and cross paths with`,
      `and come across`,
      `and see in the distance`,
      `and spy in the distance`,
      `. Turning the corner, you come across`,
      `. Then, in the distance, you see`,
      `. You walk for a while, and then come across`,
      `. You walk for a few more minutes, until you come across`,
      `. You walk along for a while, and then encounter`,
    ]} ${road.encounter}.`
  },
  trail: {
    type: [`hunter's trail`, `animal trail`, `dirt trail`],
    traffic: [
      `which seems to have been recently used`,
      `which is overgrown with weeds`,
      `that has blood spatters in the grass which indicate a recent hunt`,
      `with canopy trees providing shade overhead`,
    ],
    encounters: [
      `the border patrol`,
      `a travelling peddler`,
      `a hunting party`,
      `another adventuring party`,
      `some escaped convicts`,
      `a group of bandits operating a toll road`,
      `an itinerant priest`,
      `a dead body`,
      `a small merchant caravan`,
      `a diseased animal corpse`,
      `a group of dwarves`,
      `a solitary hunter`,
      `a handful of farmers`,
      `a solitary bandit`,
      `an injured knight`,
      `a party of raiders`,
      `a ranger`,
      `[monster encounter]`,
      `[monster encounter]`,
      `some herdsmen`,
      `a band of robbers`,
      `some particularly dense overgrowth`,
      `some tribesmen`,
      `a hermit`,
      `the undead`,
    ],
  },
  path: {
    type: [`simple path`, `overgrown dirt path`, `riding path`],
    traffic: [
      `which looks to be desolate and abandoned`,
      `dotted with hoofprints`,
      `with heavy bootprints in the dirt`,
      `with the occassional burnt out campfire on the side`,
    ],
    encounters: [
      `the road wardens`,
      `a merchant caravan`,
      `a work gang heading home`,
      `another adventuring party`,
      `some escaped convicts`,
      `some of the local militia`,
      `a pair of travelling clerics`,
      `some graverobbers`,
      `a traveling peddler`,
      `some farmers`,
      `a plague-infested cabin`,
      `a hunting party`,
      `some farmers`,
      `some bandits`,
      `an adventurer on a horse`,
      `a band of mercenaries`,
      `a solitary troubador`,
      `a mounted messenger`,
      `some beserkers`,
      `some robbers`,
      `[monster encounter]`,
      `some tribesmen`,
      `a caravan of gypsies`,
      `the undead`,
      // 'some raiders'
    ],
  },
  road: {
    type: [
      `crossroads`,
      `droveway`,
      `patrol road`,
      `dirt road`,
      `busy droveway`,
      `busy dirt road`,
      `military road`,
      `cobblestone road`,
      `busy cobblestone road`,
      `crumbling cobblestone road`,
      `paved road`,
      `busy paved road`,
      `crumbling paved road`,
    ],
    traffic: [
      `which is dotted with dead campsites where many a weary traveler has made camp for the night`,
      `occassionally passing a patrol shack`,
      `that has plenty of wheel tracks`,
      `that has road markers and signage dotted every now and then`,
      `that has checkpoints or guard posts every couple of miles`,
      `which seems to have been marred by time or, perhaps warfare`,
      `which passes a tavern that seems to be doing very well`,
    ],
    encounters: [
      `a marching army`,
      `a merchant caravan`,
      `a wedding party`,
      `another adventuring party`,
      `a group of pilgrims`,
      `some escaped convicts`,
      `a funeral procession`,
      `a plague cart`,
      `some farmers`,
      `a knight errant`,
      `a wounded knight`,
      `a lone horse, trotting the other way`,
      `a band of mercenaries`,
      `a traveling theatre troupe`,
      `a courier`,
      `some beggars`,
      `a caravan of slavers`,
      `a traveling lady`,
      `some robbers`,
      `a caravan of gypsies`,
      `a lone zombie`,
    ],
  },
}
