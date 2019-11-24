import { createNPC } from "../npc-generation/createNPC"
import { randomValue } from "../rolls"
import { Town } from "../town/town"

export function createChemist(town: Town) {
  return createNPC(town, {
    associatedTown: town.name,
    dndClass: randomValue(DND_CLASSES),
    background: randomValue(BACKGROUNDS),
    profession: `alchemist`,
    idle: IDLE,
    owner: randomValue(OWNERS),
    ingredients: INGREDIENTS,
    greeting: GREETINGS,
    chitchat: CHITCHATS,
  })
}

const DND_CLASSES = [`wizard`, `wizard`, `druid`, `druid`, `cleric`, `warlock`]

const BACKGROUNDS = [`sage`, `guild artisan`, `commoner`]

const OWNERS = [
  `owner`,
  `caretaker`,
  `proud owner`,
  `proprietor`,
  `current owner`,
  `chief owner`,
  `master chemist`,
  `chief researcher`,
  `head alchemist`,
  `sole owner`,
  `new owner`,
]

const IDLE = [
  `talking with a customer`,
  `picking $chemist.hisher nose`,
  `playing a card game by $chemist.himherself`,
  `looking over a recipe book`,
  `carefully putting ingredients into a vial`,
  `pouring ingredients into a tube`,
  `throwing herbs into a cauldron`,
  `taking a drink from a glass`,
  `taking a drink from a glass of water`,
  `stirring a pot which is bubbling happily`,
  `stirring a cauldron which bubbles menacingly`,
  `stirring a small pot with a glass spoon carefully`,
  `staring off at nothing while slowly rapping their fingers on the counter`,
  `crushing up some sort of herb with a pestle very gently`,
  `mashing up herbs with a pestle frantically`,
  `pouring a thick blue liquid into a a small bottle`,
  `pouring a bright green sludge into a glass bottle`,
  `sprinkling what looks like gold shavings into a large copper pot`,
  `rearranging a shelf full of alchemical tomes`,
  `restocking shelves with new potions`,
]

const INGREDIENTS = [
  `bloodgrass`,
  `chromus slime`,
  `ephedra`,
  `emetic wax`,
  `fennel silk`,
  `gengko bush`,
  `hyacinth nectar`,
  `lavender sprigs`,
  `mandrake root`,
  `wild sageroot`,
  `arctic creeper`,
  `amanita cap`,
  `basilisk breath`,
  `cactus juice`,
  `drakus flower`,
  `harrada leaf`,
  `quicksilver lichen`,
  `radiant synthseed`,
  `spineflower berries`,
  `wyrmtongue petals`,
  `arrow root`,
  `blue toadshade`,
  `cosmos glond`,
  `Devil's bloodleaf`,
  `fiend's ivy`,
  `hydrathistle`,
  `ironwood heart`,
  `luminous cap dust`,
  `mortflesh powder`,
  `nightshade berries`,
  `primordial balm`,
  `rock vine`,
  `scilia beans`,
  `silver hibiscus`,
  `tail leaf`,
  `verdant nettle`,
  `voidroot`,
  `wispstalks`,
  `wrackwort bulbs`,
]

const GREETINGS = [
  `nods at you`,
  `looks suspiciously at your hair, and then smiles, and welcomes you warmly`,
  `looks at your eyes intently, and then smiles, and welcomes you`,
  `welcomes you warmly`,
  `smiles and greets you`,
  `raises a gloved hand with a wave`,
  `sizes you up, before $chemist.heshe nods at you`,
  `checks you out for just a moment before smiling at you`,
  `glances up from what $chemist.heshe is doing and smiles your way`,
  `eyes you somewhat suspiciously`,
]

const CHITCHATS = [
  `talks about a new potion that $chemist.heshe is brewing up`,
  `whines about a late shipment of glassware, which is overdue`,
  `talks about the weather as $chemist.heshe carefully measures out ingredients for a new potion`,
  `discusses the latest developments in alchemy, almost all of which are either over your head, or totally boring`,
  `talks about how $chemist.hisher latest batch of potions are disappearing mysteriously`,
  `chats with you all about $chemist.hisher newest stock, none of which is particularly out of the ordinary`,
  `talks about the many uses for <<print either($chemist.ingredients)>>, which $chemist.heshe seems somewhat obsessed with`,
  `tries to push various products on you all as you look about the shop`,
]
