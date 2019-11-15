import { randomValue } from "../rolls"

import { misc } from "./miscData"

interface Wolf {
  readonly colour: string
  readonly markings: string
  readonly eyes: string
  readonly manner: string
  readonly prey: string
  readonly tactics: string
  readonly packStatus: string
  readonly habitat: string
}

export const wolf = {
  create(base?: Partial<Wolf>): Wolf {
    return {
      colour: randomValue(this.colour),
      markings: randomValue(this.markings),
      eyes: randomValue(this.eyes),
      manner: randomValue(this.manner),
      prey: randomValue(this.prey),
      tactics: randomValue(this.tactics),
      packStatus: randomValue(this.packStatus),
      habitat: randomValue(this.habitat),
      ...base,
    }
  },
  readout(wolf: Wolf) {
    return `This wolf is ${wolf.colour}, and has ${wolf.markings} coat, with ${wolf.eyes}. It is ${wolf.manner}, and is ${wolf.packStatus}. This breed thrives in ${wolf.habitat}. It prefers to ${wolf.tactics}, and if given the choice, it prefers ${wolf.prey}`
  },
  colour: [
    `black`,
    `dark grey`,
    `dark brown`,
    `black and brown`,
    `black and grey`,
    `pale brown`,
    `brown and grey`,
    `reddish brown`,
    `sandy brown`,
    `white`,
  ],
  markings: [
    `white or pale fur on each paw`,
    `white or pale fur on one paw`,
    `white or pale fur around the face and muzzle`,
    `black or dark fur around the face and muzzle`,
    `a banded pattern on its back${randomValue([`dark grey`, `pale grey`, `reddish brown`, `sandy brown`])}`,
    `lighter fur on its belly`,
    `darker fur on its belly`,
    `a distinct, ${randomValue([`white`, `pale grey`])} ${randomValue([
      `arrowhead`,
      `pair of eye-like spots`,
      `hourglass`,
      `star`,
    ])} on its chest`,
    `a scar from a past injury on its ${randomValue([`flank`, `foreleg`, `hindleg`, `snout`, `eye`, `ear`])}`,
    `no obvious markings`,
  ],
  eyes: [
    `reflective and black`,
    `pale grey`,
    `brownish grey`,
    `dark grey`,
    `dark brown`,
    `golden brown`,
    `light brown`,
    `red`,
    `yellow`,
    `green`,
    `pale blue`,
    `dark blue`,
  ],
  manner: [
    `panting lightly`,
    `panting heavily, its tongue lolling out of its mouth`,
    `salivating`,
    `hungrily licking its chops`,
    `yawning`,
    `watching curiously`,
    `watching warily`,
    `pacing nervously`,
    `whining softly`,
    `watching with ears perked and hackles raised`,
    `growling low, giving warning`,
    `standing perfectly still, ready to lunge`,
  ],
  tactics: [
    `pick off weak, easy prey`,
    `stalk its prey until the opportune time to strike`,
    `harrying its prey over long distances until the prey is exhausted`,
    `chase its prey to a place where its packmates are waiting in ambush`,
    `wait in ambush while one or more of its packmates chases the prey to it`,
    `choose its prey and to run it down`,
  ],
  prey: [
    `rabbit`,
    `squirrel`,
    `pheasant`,
    `goose`,
    `deer`,
    `sheep`,
    `chicken`,
    `carrion`,
    `human flesh`,
    `scraps from a roadside inn's refuse heap`,
  ],
  packStatus: [
    `the alpha of a large pack`,
    `the alpha of a small pack`,
    `the beta of its pack, patiently waiting for the alpha to fail`,
    `the beta of its pack, constantly challenging the alpha`,
    `somewhere in the middle of the pack order, looking for opportunities to ascend`,
    `somewhere in the middle of the pack order, satisfied to follow the alpha`,
    `the omega of a large pack`,
    `the omega of a small pack`,
    `one of a mated pair`,
    `a lone predator`,
  ],
  habitat: [
    `in canyonlands`,
    `in grassy hills`,
    `in forested hills`,
    `on grassy plains`,
    `in ancient forests`,
    `in young forests`,
    `in rocky deserts`,
    `in the foothills of mountains`,
    `in mountain passes`,
    `in frozen lands`,
  ],
}
