import { randomValue } from "../rolls"
import { misc } from "./miscData"
import { createTown } from "../town/createTown"
import { createNPC } from "../npc-generation/createNPC"
import { toUpperFirst } from "../tools/toUpperFirst"
import { NPC } from "../npc-generation/npc"

interface Caravan {
  readonly type: string
  readonly animals: string
  readonly transporting: string
  readonly mood: string
  readonly master: NPC
  readonly masterType: string
  readonly masterLooking: string
  readonly masterAvoid: string
  readonly masterCarry: string
}

export const caravan = {
  create(town = createTown(), base?: Partial<Caravan>) {
    const masterType = randomValue(Object.keys(this.masterType))

    return {
      type: randomValue(this.caravanType),
      animals: randomValue(this.animals),
      transporting: randomValue(this.transporting),
      mood: randomValue(this.mood),
      master: createNPC(town, this.masterType[masterType]),
      masterType,
      masterLooking: randomValue(this.masterLooking),
      masterAvoid: randomValue(this.masterAvoid),
      masterCarry: randomValue(this.masterCarry),
      ...base,
    }
  },
  readout(caravan: Caravan) {
    const heshe = toUpperFirst(caravan.master.heshe)
    return `The caravan is ${caravan.type}, with ${caravan.animals} as the pack animals. They are transporting ${caravan.transporting}, and the general mood seems to be ${caravan.mood} The master is ${caravan.masterType}, who is looking for ${caravan.masterLooking}. ${heshe} is taking special care to avoid ${caravan.masterAvoid} and is carrying ${caravan.masterCarry} with ${caravan.master.himher}.`
  },
  caravanType: [
    `a wagon train`,
    `a long wagon train`,
    `a small train of pack animals`,
    `a long train of pack animals`,
    `a train of pack animals with livestock`,
    `a line of people on foot with a few animals`,
  ],
  animals: [
    `one-humped camels`,
    `two-humped camels`,
    `large draft horses`,
    `reliable garrons`,
    `sure-footed ponies`,
    `mules`,
    `oxen`,
    randomValue([`bison`, `drakes`, `elephants`, `elk`, `giant lizards`, `zebras`]),
  ],
  transporting: [
    randomValue([`cotton`, `linen`, `silk`, `wool`]),
    `drugs or contraband.`,
    randomValue([
      `diamonds`,
      `emeralds`,
      `jade`,
      `obsidian`,
      `opals`,
      `pearls`,
      `rubies`,
      `sapphires`,
      `topaz`,
      `turquoise`,
    ]),
    randomValue([`arsenic`, `copper`, `gold`, `lead`, `silver`, `tin`]),
    `spices and teas.`,
    `wine and spirits.`,
  ],
  mood: [
    `desperate; a calamity has befallen them.`,
    `foul; morale is bad, and provisions are low.`,
    `tired; the journey is long and longer yet.`,
    `eager; great riches await at journey’s end.`,
  ],
  masterType: {
    "a mysterious foreigner": {
      vocalPattern: `has an accent from a foreign country`,
    },
    "a career soldier": {
      background: `soldier`,
      dndClass: `fighter`,
      profession: `soldier`,
    },
    "an outcast from a prominent family": {
      background: `noble`,
      hasClass: false,
      note: `Outcast from their family.`,
    },
    "a celebrated explorer": {
      background: randomValue([`outlander`, `sailor`]),
      hasClass: false,
      profession: `explorer`,
    },
    "a femme fatale": {
      background: `noble`,
      dndClass: `rogue`,
      gender: `woman`,
    },
    "a charming rogue": {
      background: randomValue([`criminal`, `charlatan`]),
      dndClass: `rogue`,
      calmTrait: `charming`,
    },
    "a dashing swashbuckler": {
      background: `sailor`,
      dndClass: `fighter`,
      calmTrait: `charming`,
    },
    "a brutish thug": {
      background: `soldier`,
      dndClass: `fighter`,
      calmTrait: `slow`,
      stressTrait: `murderous`,
    },
  },
  masterLooking: [
    `information regarding the route ahead`,
    `the location of an ancient ruin`,
    `extra muscle for the journey`,
    `news from the origin or destination`,
    `revenge against a bitter rival`,
    `ways to cheat the caravan’s owner`,
    `ways to speed up the caravan’s pace`,
    `drinking companions and storytellers`,
  ],
  masterAvoid: [`ancient ruins and cursed places`, `barbarians`, `bandits`, `other caravans`, `thieves`, `wild beasts`],
  masterCarry: [
    `a superbly crafted sword`,
    `several daggers and a purse of gold`,
    `a trusted blade and a map`,
    `a lucky charm (rabbit’s foot, old coin)`,
    `the token of a faraway love`,
    `some extravagant jewels and silks`,
    `keys of many shapes and sizes`,
    `a little jar of mustache wax`,
  ],
  handlerTrait: [
    `an awkward gait`,
    `incredibly large hands`,
    `holes in the breeches`,
    `quite an odor`,
    `a threadbare shirt`,
    `a ragged beard`,
  ],
  handlerWant: [`earn a little silver`, `go back home`, `survive the journey`, `have a drink and a rest`],
  handlerCarry: [
    `a memento from a loved one`,
    `several morsels of animal feed`,
    `several morsels of food`,
    `a few copper pieces`,
    `a waterskin`,
    `a wineskin`,
  ],
  cookGreet: [`a goblet of warm wine`, `a glass of water`, `a cup of cold porridge`, `a hearty handshake`],
  cookLook: [
    `someone more important to talk to`,
    `some better ingredients`,
    `a good joke or story`,
    `the bottom of a bottle`,
  ],
  cookCarry: [
    `a filthy rag`,
    `a large wooden spoon`,
    `a grease-smeared apron`,
    `an unusual belt purse`,
    `a pouch full of spices`,
    `a bottle of whisky`,
  ],
  guardIs: [
    `the son of a miner or fisherman`,
    `a veteran of warfare`,
    `the son of a poor man`,
    `a drunk`,
    `a thug`,
    `a favorite among the ladies`,
  ],
  guardReason: [`the steady pay`, `a chance to dole out pain`, `gold to repay debts`, `gold to aid a family member`],
  guardTrait: [
    `an unsightly scar`,
    `a foolish grin`,
    `a stupid stare`,
    `a blade with an inscription`,
    `a highly polished blade`,
    `a token from a favorite harlot`,
    `a silk handkerchief`,
    `a flask of wine`,
    `a pair of dice or a deck of cards`,
    `a beautiful, waxed mustache`,
  ],
  guideType: [`a nomadic herder`, `a strange hermit`, `a skilled hunter`, `a savage warrior`],
  guideLook: [
    `help the caravan in any way`,
    `lead the caravan astray`,
    `fill his purse with gold`,
    `eat, drink, and be merry`,
  ],
  guideCarry: [
    `an unusual map`,
    `a unique trinket or piece of jewelry`,
    `a spear or walking staff`,
    `a large knife and some rope`,
  ],
  merchantIs: [
    `a member of a trading clan`,
    `a minor lord or lady`,
    `an enterprising trader`,
    `a member of a prominent family`,
    `of common birth`,
    `the real owner’s representative`,
  ],
  merchantLook: [
    `obtain a mysterious artifact`,
    `negotiate a trade contract`,
    `purchase goods`,
    `sabotage a rival merchant`,
    `secure a marriage`,
    `have a good time with somebody`,
  ],
  merchantCarry: [
    `a family heirloom`,
    `several inventories and invoices`,
    `some very valuable jewels`,
    `a compromising love letter`,
  ],
  travelerIs: [`an exile`, `a minstrel`, `a pilgrim`, `a sellsword`, `a storyteller`, `a treasure hunter`],
  travelerWant: [
    `the answer to a riddle`,
    `a long lost friend`,
    `the return of something stolen`,
    `revenge against a bitter rival`,
    `new adventures`,
    `steady work`,
  ],
  travelerLook: [
    `accomplices on a quest`,
    `an audience to entertain`,
    `someone to hear a sad tale`,
    `drinking companions`,
  ],
}
