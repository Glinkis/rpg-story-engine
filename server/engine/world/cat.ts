import { randomValue } from "../rolls"

export interface Cat {
  readonly size: string
  readonly coat: string
  readonly eyes: string
  readonly breedSkill: string
  readonly favouriteFood: string
  readonly markings: string
  readonly habit: string
  readonly talent: string
}

export const cat = {
  create(base?: Partial<Cat>): Cat {
    return {
      size: randomValue(this.size),
      coat: randomValue(this.coat),
      eyes: randomValue(this.eyes),
      breedSkill: randomValue(this.breedSkill),
      favouriteFood: randomValue(this.favouriteFood),
      markings: randomValue(this.markings),
      habit: randomValue(this.habit),
      talent: randomValue(this.talent),
      ...base,
    }
  },
  readout(cat: Cat) {
    return `This cat is ${cat.size}, and has a ${cat.coat} coat, with ${cat.eyes} and ${cat.markings}. This breed was bred ${cat.breedSkill}, and this cat has ${cat.habit}. It loves ${cat.favouriteFood}, and it is particularly good at ${cat.talent}.`
  },
  size: [
    `all skin and bones`,
    `a little scrawny`,
    `pretty average in size`,
    `a little long and lanky`,
    `fat`,
    `extremely fat`,
  ],
  coat: [
    `solid white`,
    `solid black`,
    `solid grey`,
    `grey and black spotted tabby`,
    `orange and black spotted tabby`,
    `grey and black striped tabby`,
    `orange and white striped tabby`,
    `orange and white striped tabby`,
    `grey and black blotched tabby`,
    `black and white bicolor`,
    `white and orange bicolor`,
    `calico`,
  ],
  eyes: [
    `yellow eyes`,
    `golden brown eyes`,
    `copper brown eyes`,
    `dull green eyes`,
    `bright green eyes`,
    `brilliant gold eyes`,
    `copper eyes`,
    `bright blue eyes`,
    `pale blue eyes`,
    `bluish grey eyes`,
    `one blue eye and one golden brown eye`,
    `one blue eye and one copper brown eye`,
  ],
  breedSkill: [
    `to hunt mice in granaries`,
    `to hunt mice in urban dwellings`,
    `to hunt rats aboard ships`,
    `to hunt rats and mice in barns`,
    `to hunt birds on rooftops`,
    `to hunt snakes and lizards`,
    `to sit on laps`,
    `for no particular reason; it's ancestors were semi-feral village cats`,
    `for no particular reason; it's ancestors were semi-feral city cats`,
    `for no reason at all; it's ancestors were wild animals`,
  ],
  favouriteFood: [
    `warm milk`,
    `mice`,
    `baby mice`,
    `songbirds`,
    `pigeon`,
    `chicken`,
    `sardines`,
    `tuna`,
    `salmon`,
    `bacon`,
    `mackerel`,
  ],
  markings: [
    `white or black toes on one foot`,
    `extremely long whiskers`,
    `a white or black tipped tail`,
    `no tail`,
    `a broken tail`,
    `a scarred ear`,
    `a patch of missing fur`,
    `a pink nose`,
    `a black nose`,
    `a pink and black nose`,
  ],
  habit: [
    `a habit of hiding whenever it first meets someone`,
    `a habit of begging for food`,
    `a mistrustful demeanor, even toward people it knows well`,
    `a playful demeanor, always chasing its tail`,
    `a curious demeanor, always sneaking up and pouncing on things`,
    `a noisy yowl when it is sad`,
    `a cute little meow when it is content`,
    `a habit of purring and rubbing against your leg`,
    `a habit of hissing at any who approach it`,
    `a friendly demeanor, provided you have food`,
  ],
  talent: [
    `scratching`,
    `hissing`,
    `purring`,
    `climbing trees`,
    `climbing walls`,
    `catching mice`,
    `catching fish`,
    `catching birds`,
    `avoiding you`,
    `ignoring you`,
  ],
}
