import { professions } from "./professions"
import { random, randomValue, dice, randomRange } from "../rolls"
import { misc } from "../world/miscData"
import { flora } from "../dictionary/flora"
import { createNPC } from "./createNPC"
import { createMagicTrinket } from "../misc/createMagicTrinket"
import { variables } from "../global"
import { createRelationship } from "./createRelationship"
import { createMarriage } from "./createFamilyMembers"
import { createMagicWeapon } from "../misc/createMagicWeapon"
import { profile } from "./profile"

export const lifeEvents = {
  performed: {
    probability: 3,
    exclusions(town: any, npc: any) {
      const { socialClass } = professions[npc.profession]
      return socialClass === `commoner` || socialClass === `nobility` || random(100) > 90
    },
    function(town: any, npc: any) {
      const character = randomValue(lifeEvents.performed.character)
      const theatrePerformance = randomValue(lifeEvents.performed.theatrePerformance)
      const bandInfo = randomValue(lifeEvents.performed.bandInfo)
      const talent = randomValue(lifeEvents.performed.talent)
      const talentShowInfo = randomValue(lifeEvents.performed.talentShowInfo)
      return randomValue([
        `${randomValue([`I played`, `I was`])} ${character} in a ${randomValue([
          `local`,
          `regional`,
          `travelling`,
          `well known`,
          `little known`,
        ])} ${randomValue([`theatre show`, `musical`, `play`, `one man show`])}. ${theatrePerformance}.`,
        `${randomValue([`I was part of a`, `I played in a`, `I was in a`])} ${randomValue([
          `traveling band`,
          `local band`,
          `well known band`,
          `one man band`,
          `barely known band`,
          `pretty unpopular band`,
        ])} ${randomValue([
          `for a while`,
          `for a little bit`,
          `for a pretty long stint`,
          `for a couple months`,
          `for over a year`,
          `for a short time`,
        ])}. The band ${bandInfo}.`,
        `${randomValue([`I entered a`, `I took part in a`, `I competed in a`])} ${randomValue([
          `local`,
          `regional`,
          `kingdom wide`,
        ])} talent show with my ${talent}. ${talentShowInfo}.`,
      ])
    },
    character: [
      `a main character`,
      `the main character`,
      `a secondary character`,
      `a minor charcter`,
      `a minor part`,
      `a secondary part`,
      `the love interest`,
      `the comic relief`,
      `the main villain`,
      `the villain's sidekick`,
      `the detective`,
      `the hero`,
      `a chorus member`,
    ],
    theatrePerformance: [
      `I can still hear the roaring applause of the audience sometimes`,
      `Sometimes, I can still hear the crowd booing me off the stage`,
      `The audience never seemed all too impressed with my performance`,
      `Admittedly I wasn't the best performer, but I had fun`,
      `I was not a great actor, but I made a lot of friends`,
      `I played my part well if I do say so myself`,
      `I was masterful in the role and everyone told me so`,
      `The audience always gave me a standing ovation`,
      `Some of the audience members actually threw rotten fruit at me`,
      `The crowds would throw flowers and coins onto the stage after every show`,
      `I did pretty well and I made a lot of friends`,
      `I didn't really like any of the other actors`,
      `Admittedly all the other actors were a lot better than I was`,
      `I was a better performer than anyone else in the show`,
    ],
    bandInfo: [
      `only ever played at a few taverns`,
      `was pretty experimental and not a lot of people understood the music`,
      `was a lot of fun at the time`,
      `was something I would like to do again some day`,
      `wasn't very good at playing to be honest`,
      `had a lot of songs but not many good ones`,
      `only had a few songs but all of them were pretty good`,
      `made all the instrument noises with their voices`,
      `was pretty popular among the dwarves`,
      `managed to play for a local noble's feast`,
      `only ever played on the open streets`,
    ],
    talent: [
      `singing`,
      `juggling`,
      `lute playing`,
      `harp playing`,
      `dancing`,
      `acting`,
      `cooking`,
      `needlepoint skills`,
      `comedy routine`,
      `drum playing`,
      `painting`,
      `sword skills`,
      `archery`,
    ],
    talentShowInfo: [
      `I didn't win anything, but I had a good time`,
      `I may not have won anything, but I made some new friends`,
      `I messed up in the middle of my act and it cost me the prize`,
      `I won first place and got a ton of prizes`,
      `I got second place and got a pretty good prize`,
      `My act was sabatoged by someone and I lost`,
      `One of the judges had it out for me and cost me the grand prize`,
      `I lost out to someone far better at my own talent`,
      `I beat out several people with the same talent`,
      `A local noble even complimented my skills after the show was over`,
      `The audience actually booed me off the stage I was so bad`,
      `The judges were really amazed by my performance`,
    ],
  },
  warMedal: {
    probability: 2,
    exclusions(town: any, npc: any) {
      const condition = professions[npc.profession].sector === `military` || random(100) > 70
      return condition && npc.ageYears > 15
    },
    function(town: any, npc: any) {
      const medal = misc.medal.create()
      const medalType = randomValue(lifeEvents.warMedal.medalType)
      const medalStatus = randomValue(lifeEvents.warMedal.medalStatus)
      if (professions[npc.profession].sector === `military`) {
        return `${randomValue([
          `after a recent war`,
          `after a brutal battle`,
          `after taking command of a dangerous situation`,
          `I fought in a war and`,
        ])} I was awarded a ${medal.tip} for ${medalType}. ${medalStatus}.`
      } else if (npc.ageYears > 60) {
        return `${randomValue([
          `in my military youth`,
          `back when I was young enough for the army`,
          `in my army days`,
          `after a forced recruitment into a noble's army`,
          `I was recruited into a war and afterwards `,
        ])} I was awarded a ${medal.tip} for ${medalType}. ${medalStatus}.`
      } else
        return `${randomValue([
          `after being forced into an army for a recent war`,
          `after a forced recruitment into an army`,
          `after being dragged along on a military campaign`,
          `after joining in on a recent war`,
          `I was recruited into a war and afterwards`,
        ])} I was awarded a ${medal.tip} for ${medalType}. ${medalStatus}.`
    },
    medalType: [
      `bravery`,
      `honor`,
      `valour`,
      `service`,
      `patriotism`,
      `marksmanship`,
      `brutality`,
      `support`,
      `my contributions`,
      `distinguished service`,
      `merit`,
      `heroism`,
      `acting in the face of danger`,
      `defensive actions`,
      `going above and beyond my duty as a soldier`,
      `excellent combat`,
      `good conduct`,
      `the long tour`,
      `saving a life`,
    ],
    medalStatus: [
      `I keep it on me at all times in my pocket for luck`,
      `I keep it pinned on my chest at all times`,
      `I keep it above my fireplace to show my guests`,
      `I keep it in a drawer somewhere, I don't like to think about what happened back then`,
      `I have no idea where it is these days and I don't really care`,
      `I lost it at some point and I wish I could find it again`,
      `I had to sell it when times were tough`,
      `The thing was stolen from me one night and I never saw it again`,
    ],
  },
  magicalCreatue: {
    probability: 2,
    exclusions(town: any, npc: any) {
      return professions[npc.profession].sector === `adventuring` || random(100) > 90
    },
    function(town: any, npc: any) {
      const flower = randomValue(flora.flower.stemP)
      const tree = randomValue(flora.tree.typeArticle)
      const fruitTree = randomValue(flora.fruit.tree)
      const goodPlace = randomValue(lifeEvents.magicalCreatue.goodPlaces)
      const goodCreature = randomValue(lifeEvents.magicalCreatue.goodCreatures)
      const goodAnimal = randomValue(lifeEvents.magicalCreatue.goodAnimals)
      const badPlace = randomValue(lifeEvents.magicalCreatue.badPlaces)
      const badCreature = randomValue(lifeEvents.magicalCreatue.badCreatures)
      const badAnimal = randomValue(lifeEvents.magicalCreatue.badAnimals)

      // good/non-hostile creatures
      return randomValue([
        `${randomValue([
          `while I was travelling through`,
          `while I was journeying through`,
          `while passing through`,
          `while exploring`,
        ])} ${randomValue([
          `${tree} forest`,
          `a field of ${flower}`,
          `an orchard of ${fruitTree} trees`,
          goodPlace,
        ])}, ${randomValue([
          `I saw`,
          `I spotted`,
          `I came across`,
          `I stumbled upon`,
          `I ran into`,
          `I caught sight of`,
        ])} ${randomValue([goodCreature, goodCreature, `a giant ${goodAnimal}`])}!${randomValue([
          `I got pretty close to it before it ran off`,
          `I got close enough to touch it`,
          `It ran off as soon as it saw me`,
          `It spent the day following me from a distance`,
        ])}.`,
        // dangerous/evil creatures
        `${randomValue([
          `while I was travelling through`,
          `while I was journeying through`,
          `while passing through`,
          `while exploring`,
          `while trying to escape`,
        ])} ${randomValue([`the heart of ${tree} forest`, badPlace, badPlace, badPlace])}, ${randomValue([
          `I saw`,
          `I spotted`,
          `I came across`,
          `I stumbled upon`,
          `I ran into`,
          `I caught sight of`,
        ])} ${randomValue([badCreature, badCreature, `a giant ${badAnimal}`])}! ${randomValue([
          `It started chasing me as soon as it saw me, and I barely escaped`,
          `I ran as soon as I saw the thing`,
          `I snuck up close to get a better look, but ran away after that`,
          `The creature stalked me for the rest of the day`,
          `It didn't see me, but after that I was on edge for the rest of my journey`,
          `I barely escaped from that thing with my life`,
        ])}.`,
      ])
    },
    goodPlaces: [
      `far away lands`,
      `a dense marsh`,
      `a red sand desert`,
      `a white sand desert`,
      `some truly mystical lands`,
      `a magical forest`,
      `a beautiful, sunlit valley`,
      `a deep, colorful canyon`,
      `a clearing near a bright blue creek`,
      `a clear skyed savannah`,
      `the ruins of an ancient temple`,
    ],
    goodCreatures: [
      `a unicorn`,
      `a gryphon`,
      `a fairy`,
      `an ent`,
      `a phoenix`,
      `a pegasus`,
      `a brownie`,
      `a pixie`,
      `a hippogrif`,
    ],
    goodAnimals: [
      `fox`,
      `owl`,
      `raven`,
      `turtle`,
      `frog`,
      `beaver`,
      `deer`,
      `elk`,
      `sparrow`,
      `cat`,
      `frog`,
      `chameleon`,
      `beetle`,
      `squirrel`,
      `rabbit`,
    ],
    badPlaces: [
      `the ruins of a castle`,
      `a murky swamp`,
      `a dark bog`,
      `a winding maze`,
      `a twisting system of caverns`,
      `an enormous cavern`,
      `a craggy mountain pass`,
      `the bottom of a canyon`,
      `a field in the dead of night`,
      `a forest under the full moon`,
      `a mountain pass`,
      `an abandoned city`,
      `the ruins of a forgotten temple`,
      `a far away land`,
    ],
    badCreatures: [
      `a dragon`,
      `a werewolf`,
      `a vampire`,
      `a sphinx`,
      `a banshee`,
      `a chimera`,
      `an imp`,
      `a golem`,
      `a hydra`,
      `a wyvern`,
      `an ogre`,
      `a zombie`,
    ],
    badAnimals: [
      `bat`,
      `bear`,
      `lion`,
      `tiger`,
      `vulture`,
      `wolf`,
      `crocodile`,
      `wasp`,
      `hornet`,
      `cobra`,
      `spider`,
      `scorpion`,
      `wolverine`,
    ],
  },
  festival: {
    probability: 5,
    exclusions(town: any, npc: any) {
      return true
    },
    function(town: any, npc: any) {
      const placement = randomValue(lifeEvents.festival.placement)
      const foodTrait = randomValue(lifeEvents.festival.foodTrait)
      const flowerTrait = randomValue(lifeEvents.festival.flowerTrait)
      const fruit = randomValue(flora.fruit.fruitP)
      const vegetable = randomValue(flora.vegetable.vegetableP)
      const flower = randomValue(flora.flower.stemP)
      const festivalDid = randomValue(lifeEvents.festival.festivalDid)
      if (random(100) > 70) {
        return randomValue([
          `${randomValue([`I won`, `I got`])} ${placement} at ${randomValue([
            `a garden festival`,
            `a farmer's market`,
            `an agriculture festival`,
            `a garden tournament`,
          ])} for my ${foodTrait} ${randomValue([fruit, vegetable])}.`,
          `${randomValue([`I won`, `I got`])} ${placement} at ${randomValue([
            `a garden festival`,
            `a flower festival`,
            `a farmer's market`,
            `a garden tournament`,
          ])} for my ${flowerTrait} ${flower}.`,
          `${randomValue([`some friends and I went to`, `I went to`, `I spent a day at`])} ${randomValue([
            `a garden festival`,
            `a farmer's market`,
            `an agriculture festival`,
            `a garden tournament`,
          ])} where I saw some ${foodTrait} ${randomValue([fruit, vegetable])}. ${randomValue([
            `I think they won`,
            `If I recall correctly, they got`,
            `At the end of the festival they won `,
          ])} ${placement} in the growers competition.`,
          `${randomValue([`some friends and I went to`, `I went to`, `I spent a day at`])} ${randomValue([
            `a garden festival`,
            `a flower festival`,
            `a farmer's market`,
            `a garden tournament`,
          ])} where I saw some ${flowerTrait} ${flower}. ${randomValue([
            `I think they won`,
            `If I recall correctly, they got`,
            `At the end of the festival they won `,
          ])} ${placement} in the growers competition.`,
        ])
      } else {
        return randomValue([
          `${randomValue([
            `some friends and I went to`,
            `I went to`,
            `I spent a day at`,
            `I attended`,
            `I went to celebrate at`,
          ])} ${randomValue([
            `a holiday festival`,
            `a spring festival`,
            `a summer festival`,
            `a fall festival`,
            `a autumn festival`,
            `a winter festival`,
            `a grand festival`,
            `a festival`,
            `a festival for the gods`,
            `a heroe's festival`,
          ])}. While I was there, I ${festivalDid}.`,
          `${randomValue([
            `some friends and I went to`,
            `I went to`,
            `I spent a day at`,
            `I attended`,
            `I went to celebrate at`,
          ])} ${randomValue([
            `a holiday festival`,
            `a spring festival`,
            `a summer festival`,
            `a fall festival`,
            `a autumn festival`,
            `a winter festival`,
            `a grand festival`,
            `a festival`,
            `a festival for the gods`,
            `a heroe's festival`,
          ])}. While I was there, I ${festivalDid}.`,
        ])
      }
    },
    placement: [`first place`, `second place`, `third place`, `gold`, `silver`, `bronze`, `runner up`],
    foodTrait: [`delicious`, `colorful`, `giant`, `enormous`, `vibrant`, `fresh`, `durable`],
    flowerTrait: [`colorful`, `giant`, `enormous`, `vibrant`, `fresh`, `sweet-smelling`, `pollen covered`],
    festivalDid: [
      `saw a spectacular parade`,
      `saw a parade with enormous floats made of flowers`,
      `watched a parade that was full of magical effects`,
      `saw an incredible troupe of dancing elves`,
      `watched several dance troupes compete in a competition`,
      `listened to several live musical performances`,
      `saw a marching bard in the parade`,
      `drank deeply and merrily`,
      `sang folk songs with the other festival goers`,
      `danced the day away with the other merrymakers`,
      `partook in several festival traditions`,
      `watched a fantastic play performed on a moving stage in the parade`,
      `saw a huge dragon puppet march through the streets`,
      `visited several shops and stalls full of delicious food`,
      `visited several brewing stalls and drank to my heart's content`,
    ],
  },
  apprentice: {
    probability: 6,
    exclusions(town: any, npc: any) {
      return professions[npc.profession].socialClass !== `nobility`
    },
    function(town: any, npc: any) {
      const apprenticeProfession = randomValue(lifeEvents.apprentice.profession)
      const reputation = randomValue(lifeEvents.apprentice.reputation)
      const learned = randomValue(lifeEvents.apprentice.learned)
      const teacher = createNPC(town, {
        profession: apprenticeProfession,
        isShallow: true,
      })
      return `${randomValue([
        `I apprenticed under`,
        `I worked under`,
        `I learned under the tutelage of`,
        `I was a novice to`,
      ])} ${profile(teacher, teacher.name)} ${reputation} ${apprenticeProfession}. During that time ${learned}.`
    },
    profession: [
      `actor`,
      `architect`,
      `armorer`,
      `astrologer`,
      `barber`,
      `blacksmith`,
      `brewer`,
      `carpenter`,
      `cook`,
      `goldsmith`,
      `hatter`,
      `jeweler`,
      `leatherworker`,
      `locksmith`,
      `minstrel`,
      `painter`,
      `potter`,
      `rugmaker`,
      `sculptor`,
      `silversmith`,
      `toymaker`,
      `costumer`,
      `artist`,
      `musician`,
      `coinsmith`,
      `candlemaker`,
      `fletcher`,
      `weaponsmith`,
      `chemist`,
    ],
    reputation: [
      `a well known`,
      `a world renowned`,
      `a master`,
      `an incredibly talented`,
      `a legendary`,
      `a famous`,
      `a lesser known`,
      `an obscure`,
      `a mediocre`,
      `a decent`,
      `an alright`,
      `a rather unskilled`,
      `a piss poor`,
    ],
    learned: [
      `I learned a lot about myself`,
      `I realized being in that trade just wasn't for me`,
      `I learned a lot of valuable life lessons`,
      `I learned a lot about the trade`,
      `I realized my teacher wasn't that great`,
      `my master beat their teachings into me`,
      `my master was gentle with their teachings`,
      `my master taught me many things`,
      `I realized what I truly wanted in life`,
      `I learned I'm not very good at the trade`,
    ],
  },
  trinket: {
    probability: 5,
    exclusions(town: any, npc: any) {
      return true
    },
    function() {
      const trinket = createMagicTrinket()
      return (
        `${randomValue([
          `I was given a magical trinket- it's a `,
          `I happened across a `,
          `I found my lost family heirloom, it is a `,
          `I was gifted a `,
          `I saved a wizard's life, and as a token of his thanks, he gave me a `,
          `I went on my own adventure and discovered a `,
          `I met up with an adventurer who generously gave me a `,
          `I came across a trinket in a field- It's a `,
          `I was on a long journey when I found a `,
        ]) + trinket.name}.` +
        `<blockquote>` +
        `<h4>${trinket.name}</h4>${trinket.description}</blockquote>`
      )
    },
  },
  nobleEvent: {
    probability: 5,
    exclusions(town: any, npc: any) {
      const { socialClass } = professions[npc.profession]
      return socialClass === `commoner` || socialClass === `peasantry`
    },
    function(town: any, npc: any) {
      const noble = createNPC(town, {
        background: `noble`,
        isShallow: true,
      })
      const prefix = randomValue(lifeEvents.nobleEvent.prefix)
      const banquetCelebrate = randomValue(lifeEvents.nobleEvent.banquetCelebrate)
      const ballCelebrate = randomValue(lifeEvents.nobleEvent.ballCelebrate)
      const carriage = randomValue(lifeEvents.nobleEvent.carriage)
      const handshake = randomValue(lifeEvents.nobleEvent.handshake)
      return randomValue([
        `${prefix} the royal wedding of a local ${profile(noble, `noble`)}.`,
        `${prefix} the royal ${randomValue([`banquet`, `feast`, `gathering`])} of a local ${profile(
          noble,
          `noble`
        )} in celebration of ${banquetCelebrate}.`,
        `${prefix} the royal ${randomValue([`ball`, `dance`, `gala`, `masquerade ball`])} hosted by a local ${profile(
          noble,
          `noble`
        )} in honor of ${ballCelebrate}.`,
        `I saw the carriage of a ${profile(noble, `noble`)} ${randomValue([
          `passing by my house`,
          `while traveling`,
          `going down a city street`,
          `passing through my town`,
        ])}, and it was ${carriage}.`,
        `I shook the hand of a passing ${profile(noble, `noble`)}. If I recall their handshake was ${handshake}.`,
      ])
    },
    prefix: [
      `I was invited to`,
      `I got to attend`,
      `I had the honor to go to`,
      `I had the pleasure of attending`,
      `I was forced to go to`,
    ],
    banquetCelebrate: [
      `a local hero`,
      `the remembrance of a past ruler`,
      `a local holiday`,
      `a bountiful summer harvest`,
      `the death of a nearby warlord`,
      `the completion of the noble's newest summer home`,
      `a triumphant adventuring party`,
      `a recent coronation`,
    ],
    ballCelebrate: [
      `a recent royal wedding`,
      `the beginning of a search for a suitable spouse for this noble`,
      `the end of a recent war`,
      `the passing of a nearby ruler`,
      `the local militia`,
      `the end of the hunting season`,
      `the presentation of the debutantes`,
      `a recent coronation`,
    ],
    carriage: [
      `rather plain, but still impressive`,
      `massive with eight elegant wheels`,
      `pulled by four massive white horses`,
      `being pulled by a single elephant`,
      `ornately decorated with gold trim`,
      `painted with bright yet regal colors`,
      `a true sight to behold`,
      `a clear waste of taxpayer money`,
      `pulled by several thickly muscled slaves`,
      `flying two massive banners for the noble's house`,
      `flanked by militia on both sides`,
      `being followed by a flock of adoring fans`,
      `being pelted with rotten fruit by the starving peasants`,
      `being cheered on by the adoring townsfolk`,
      `adorned with a beautiful floral mural`,
      `beaten and battered as if it had recently seen battle`,
    ],
    handshake: [
      `firm but friendly`,
      `a little too firm`,
      `rather limp`,
      `cold and clammy`,
      `much too sweaty`,
      `coarse and emotionless`,
      `nothing special`,
      `rather pathetic`,
      `pretty weak`,
      `strong and commanding`,
      `strangely hot`,
    ],
  },
  journey: {
    probability: 3,
    exclusions(town: any, npc: any) {
      return true
    },
    function(town: any, npc: any) {
      const prefix = randomValue(lifeEvents.journey.prefix)
      const location = randomValue(lifeEvents.journey.location)
      const locationLocation = randomValue(lifeEvents.journey.locationLocation)
      const found = randomValue(lifeEvents.journey.found)
      const notFound = randomValue(lifeEvents.journey.notFound)
      return `${randomValue([
        `${prefix} ${location} ${locationLocation}. ${randomValue([
          `I really did make it there, `,
          `I got to see that place, `,
          `My journey was succesful, `,
        ])} ${found}`,
        `${prefix} ${location} ${locationLocation}. ${randomValue([
          `I never found it, `,
          `I never got to see that place, `,
          `My journey was a failure, `,
          `I got lost along the way and never made it there, `,
        ])} ${notFound}`,
      ])}.`
    },
    prefix: [
      `I ventured out to see`,
      `I went on a journey to find`,
      `I struck out heading towards`,
      `a group of travelers and I went to find`,
      `my friends and I went on a long journey to`,
    ],
    location: [
      `a tower of knowledge`,
      `an elusive library made of marble`,
      `the statue of a forgotten hero`,
      `the palace of a sleeping god`,
      `the greatest fishing spot ever`,
      `a peaceful mountain retreat`,
      `the hidden cherry blossom grove`,
      `the dojo of a long lost martial art`,
      `the grand castle of a foreign noble`,
      `a crystal clear lake`,
      `the burial tomb of an ancient ruler`,
      `a city of dwarves`,
      `a city of elves`,
      `the ruins of a lost city`,
      `the remnants of a grand wizard tower`,
      `the battlegrounds of a long over war`,
      `the still-burning carcass of an ancient behemoth`,
      `a secluded civilization, nearly forgotten by outsiders`,
    ],
    locationLocation: [
      `in an ever shifting desert`,
      `in a red sand desert`,
      `in a desert where the dunes whisper secrets`,
      `in a white sand desert`,
      `in an incredibly hot desert`,
      `on the peak of a snowy mountain`,
      `near the peak of a mountain`,
      `built into the side of a cliff`,
      `in a forest`,
      `near a forest`,
      `in a dark wood`,
      `out on the plains`,
      `near the ocean`,
      `on a floating dock in the ocean`,
      `on a secluded island`,
      `in the depths of a cavern`,
      `in an icy tundra`,
      `built into a glacier`,
      `at the bottom of a deep ravine`,
      `hidden inside a mountain`,
      `ina secluded valley`,
      `ina tropical valley`,
      `on an arid tundra`,
      `in the black mountains`,
      `in the white mountains`,
      `in the red forest`,
      `on the edge of a great mountain range`,
      `encircled by mountains`,
      `at the edge of the world`,
      `on the back of a giant turtle`,
    ],
    found: [
      `and it was an incredible experience`,
      `and I learned much along the way`,
      `and it is a place I will never forget`,
      `and I like to think I became a better person from the trek`,
      `and I came back with several keepsakes`,
      `and I made some new friends along the way`,
      `and I made some important discoveries while I was there`,
      `but I don't like to brag about it`,
      `but it was not what I was truly looking for`,
      `but to be honest the place was kind of a let down`,
    ],
    notFound: [
      `and I have always regretted not going again`,
      `but I came out of the journey a better person`,
      `and I have always wondered what it would have looked like there`,
      `but I have not given up`,
      `and honestly I think the place may not exist`,
      `and to be honest I have given up on ever going there`,
      `but I do not regret trying`,
      `but I still made some new friends along the way`,
      `and to be honest I'm kind of glad I didn't make it`,
    ],
  },
  lostChild: {
    probability: 3,
    exclusions(town: any, npc: any) {
      return true
    },
    function(town: any, npc: any) {
      const treeType = randomValue(flora.tree.typeArticle)
      const location = randomValue(lifeEvents.lostChild.location)
      const time = randomValue(lifeEvents.lostChild.time)
      const finder = randomValue(lifeEvents.lostChild.finder)
      const ending = randomValue(lifeEvents.lostChild.ending)
      return `${randomValue([
        `when I was young`,
        `as a young child`,
        `while I was still a kid`,
      ])} I got lost in ${randomValue([location, `${treeType} tree forest`])} ${time}. ${randomValue([
        `I was found by ${finder}`,
        `I was found by ${finder}`,
        `I was found by ${finder}`,
        `I was found by ${finder}`,
        `I was found by ${finder}`,
        `I found my own way back`,
        `I eventually found ${finder}`,
      ])} ${ending}.`
    },
    location: [
      `a strange desert`,
      `a large ruined maze`,
      `a twisting and winding maze`,
      `an enormous city`,
      `another realm`,
      `a deep cavern`,
      `the ruins of a city`,
      `a twisting system of tunnels underground`,
      `a mountain pass`,
      `an ancient battlefield`,
      `a forgotten city below the ground`,
      `a dwarven ruin`,
      `an elven ruin`,
      `a magic tower`,
    ],
    time: [
      `for several weeks`,
      `for a few hours`,
      `for a few days`,
      `for weeks`,
      `for days`,
      `for many moons`,
      `for a month`,
      `for months`,
      `for half a year at least`,
      `and I can not remember how long I was there`,
      `for years maybe`,
      `for years`,
      `for how long I can not be sure`,
    ],
    finder: [
      `a passing merchant`,
      `my parents`,
      `my mother`,
      `my father`,
      `my relative`,
      `a city guard`,
      `a hero out on an adventure`,
      `a hero party that had been questing for me`,
      `an equally lost bard`,
      `a traveling ranger`,
      `a haggard monk`,
      `a pack of wolves`,
      `a noble on a journey`,
    ],
    ending: [
      `and went back home`,
      `and learned a valuable lesson from it all`,
      `but have been haunted by that experience`,
      `but not before I hurt myself trying to get home`,
      `but not before I was roughed up by some bandits I ran into`,
      `and have not really ventured out much since`,
      `and have carried a compass ever since`,
      `but I still get lost from time to time`,
      `and I studied up on maps of the area so I would never get lost again`,
    ],
  },
  pilgrimage: {
    probability: 5,
    exclusions(town: any, npc: any) {
      return professions[npc.profession].sector === `religion` || random(100) > 75
    },
    function(town: any, npc: any) {
      const prefix = randomValue(lifeEvents.pilgrimage.prefix)
      const location = randomValue(lifeEvents.pilgrimage.location)
      const journey = randomValue(lifeEvents.pilgrimage.journey)
      const result = randomValue(lifeEvents.pilgrimage.result)
      return `${prefix} ${location}. ${journey}, ${result}.`
    },
    prefix: [
      `I set off on a pilgrimage by myself to`,
      `I went on a pilgrimage with a group to`,
      `I went on a holy journey to`,
      `I traveled a great distance on pilgrimage to`,
    ],
    location: [
      `the floating island of a god`,
      `a far away temple`,
      `see the holiest relic of my people`,
      `a holy landmark of my god`,
      `an isolated monastery in the <<print either("mountains", "desert", "forest", "depths of a cavern", "bottom of a canyon", "frozen tundra")>>`,
      `the birthplace of my god`,
      `the holy city of my god`,
      `the highest peak of a holy mountain`,
      `a far off nunnery`,
      `a town of heathens`,
      `see the holy art of my god`,
      `to pray at the feet of my deity`,
      `a distant shrine`,
    ],
    journey: [
      `The <<print either("journey", "pilgrimage", "travel", "trek", "trip")>> was <<print either("simple", "harsh", "long", "grueling", "easy", "difficult", "peaceful", "hard", "fantastical", "terrible", "great", "boring", "rough")>>`,
      `It was a <<print either("simple", "harsh", "long", "grueling", "easy", "difficult", "peaceful", "hard", "fantastical", "terrible", "great", "boring", "rough")>> <<print either("journey", "pilgrimage", "travel", "trek", "trip")>>`,
      `I was not prepared enough for the <<print either("journey", "pilgrimage", "travel", "trek", "trip")>>`,
      `I had waited my whole life for this`,
    ],
    result: [
      `and I came out a better person at the end of it`,
      `and my life was changed by it all`,
      `but in the end I'm not sure if it was worth it`,
      `but in the end it was worth it all`,
      `and my god rewarded me for my travels`,
      `but my god did not speak to me in my travels`,
      `and at the end of it all I had a holy vision`,
      `but my god did not show me what I was hoping for`,
      `and I feel so enlightened now`,
      `and my peers have respected me more since I returned`,
      `and I have found my place in my faith`,
      `and I was gifted holy sight for my troubles`,
      `but I do not feel any more enlightened from the experience`,
      `but I sacraficed much to finish the trip`,
    ],
  },
  meetFriendNPC: {
    probability: 8,
    exclusions(town: any, npc: any) {
      return true
    },
    function(town: any, npc: any) {
      let friend: any
      if (random(100) > 50) {
        friend = Object.entries(variables.npcs).find(([name, npc]) => {
          return npc.socialClass === npc.socialClass && !npc.relationships[npc.key]
        })
        if (friend === undefined) {
          friend = createNPC(town, {
            isShallow: true,
            socialClass: npc.socialClass,
          })
        }
      } else {
        friend = createNPC(town, {
          isShallow: true,
        })
      }
      createRelationship(town, npc, friend, `friend`, `friend`)
      if (npc.hasClass === false) {
        // Descriptions and stuff goes here
        return randomValue([
          `I met my ${profile(friend, `best buddy`)} on some travel.`,
          `I lost contact with an ${profile(friend, `old friend`)}, and reconnected with ${profile(
            friend,
            friend.himher
          )} on a pilgrimage.`,
          `I made a ${profile(friend, `good friend`)} during a drinking contest.`,
          `we were attacked by raiders, and I was saved by a ${profile(
            friend,
            `traveler`
          )} passing through. We are best of friends to this day.`,
        ])
      } else {
        return randomValue([
          `I made a ${profile(friend, `friend`)} for life in my travels.`,
          `I was poor as a churchmouse, but then ${profile(
            friend,
            `a total stranger`
          )} helped me get a job. I owe everything I am today to his compassion.`,
          `I went traveling for a while, and found myself in the company of all manner of folk, who I like to think helped teach me how to be a bit wiser.`,
          `I took an odd job delivering a package to the town over. Never would have thought that that sort of thing could be life-changing, but it was- it's where I met my ${profile(
            friend,
            `best friend`
          )}.`,
        ])
      }
    },
  },
  meetEnemyNPC: {
    probability: 8,
    exclusions(town: any, npc: any) {
      if (npc.ageYears >= 18 && npc.ageStage !== `child`) {
        return true
      }
    },
    function(town: any, npc: any) {
      const enemy = createNPC(town, {
        gender: `man`,
        background: `noble`,
        isShallow: true,
      })
      createRelationship(town, npc, enemy, `enemy`, `enemy`)
      return (
        randomValue([
          `I made an ${profile(enemy, `enemy`)} for life in my travels- `,
          `I was framed by a ${profile(enemy, `scoundrel`)} for a crime I didn't commit- `,
          `I met a ${profile(enemy, `man`)}, and we played cards. He decided that I was cheating- `,
          `I was a guest in the court of a ${profile(enemy, `lord`)}, and made an embarassment of him- `,
          `I used to play cards in a pub, and one time supposedly cheated a ${profile(
            enemy,
            `man`
          )} out of his winnings; `,
        ]) +
        randomValue([
          `it was a misunderstanding, but I cannot convince him otherwise. `,
          `I admit that I am at least partially at fault. `,
          `I suppose that I'm at least partially to blame. `,
          `I'll freely admit that I'm to blame. `,
          `I'm ashamed to admit that I'm to blame. `,
          `I'm not quite sure what happened. `,
          `it was all a setup, but a very good one. `,
          `I'll never say what really happened. `,
        ]) +
        randomValue([
          `He hunts me to this day.`,
          `I hope to apologise to him if I ever encounter him again.`,
          `I don't exactly care to run into him again.`,
          `I couldn't care less if he tries to do anything about it.`,
          `I'll gut him like a fish if he crosses my path again.`,
          `I'm afraid that he'll kill me in my sleep.`,
          `I would rather have backup the next time that I face him.`,
          `I doubt I'll ever meet him again.`,
          `That's all behind me now and I hope it stays that way.`,
          `I'm still on the lookout for him to this very day.`,
        ])
      )
    },
  },
  meetPartnerNPC: {
    probability: 10,
    exclusions(town: any, npc: any) {
      return npc.ageYears >= 18 && npc.ageStage !== `child`
    },
    function(town: any, npc: any) {
      const family = town.families[npc.family]
      const node = family.members[npc.key]

      let partnerKey
      let childKey

      // force creation of family members when applicable
      if (node.marriages === undefined || node.marriages.length === 0) {
        const newMarriage = createMarriage(town, family, npc, true)
        node.marriages = [newMarriage]
        partnerKey = newMarriage.parents.find(key => key !== npc.key)

        if (!partnerKey) {
          return `I met the love of my life, who is no longer with me.`
        }
        return `I met the love of my life, ${profile(partnerKey)}.`
      } else {
        const marriage = node.marriages[0]
        partnerKey = marriage.parents.find(key => key !== npc.key)

        if (marriage.children.length > 0) {
          childKey = marriage.children[0]
        }
      }

      let childMsg = ``
      let partnerMsg = ``

      if (childKey) {
        childMsg = `I had a child, ${profile(variables.npcs[childKey])}`
        partnerMsg = partnerKey
          ? ` with my dear partner ${profile(variables.npcs[partnerKey])}.`
          : ` with my dear partner, who is no longer with me.`
      } else {
        partnerMsg = partnerKey
          ? `I met the love of my life, ${profile(variables.npcs[partnerKey])}.`
          : `I met the love of my life, who is no longer with me.`
      }

      return childMsg + partnerMsg
    },
  },
  backgroundWork: {
    probability: 20,
    exclusions(town: any, npc: any) {
      return npc.ageYears >= 18 && npc.ageStage !== `child`
    },
    function(town: any, npc: any) {
      npc.wealth += dice(2, 6) * 1000
      return `${randomValue([
        `I spent some time working as a `,
        `I did a stint as a `,
        `I worked as a `,
        `for a while I did some work as a `,
        `because of a promise, I did some time as a `,
        `there was no other work so for a while I was a `,
        `to pay off a debt, I spent some time as a `,
        `to pay off a debt, I had to work as a `,
      ])}${randomValue([
        npc.background,
        npc.background,
        npc.background,
        npc.background,
        npc.dndClass,
        npc.dndClass,
        npc.dndClass,
      ])}.`
    },
  },
  meetImportantNPC: {
    probability: 5,
    exclusions(town: any, npc: any) {
      return true
    },
    function(town: any, npc: any) {
      return randomValue([
        `${randomValue([
          `I met a famous `,
          `I came across a famous `,
          `for a time, I worked for a famous `,
          `I met a well known `,
          `I had a brief stint working for a famous `,
          `I got an autograph from a famous `,
        ]) +
          randomValue([
            `wizard`,
            `bard`,
            `priest`,
            `noble`,
            `sorcerer`,
            `inventor`,
            `merchant`,
            `group of mercenaries`,
            `witch`,
            `general`,
            `commander`,
            `enchanter`,
            `druid`,
            `talking horse`,
            `adventurer`,
            `hero`,
            `blacksmith`,
            `armorer`,
            `alchemist`,
            `stage actor`,
            `playwright`,
            `artist`,
            `sculptor`,
            `painter`,
            `poet`,
            `knight`,
            `historian`,
            `gladiator`,
            `architect`,
            `crime boss`,
            `rogue`,
            `smuggler`,
          ]) +
          randomValue([
            ` in my travels`,
            ` on the road`,
            ` while I was traveling`,
            ` when I was spending some time as a ${npc.background}`,
            ` while on a long journey`,
            ` during one of my youthful adventures`,
          ])}.`,
      ])
    },
  },
  adventure: {
    probability: 5,
    exclusions(town: any, npc: any) {
      return npc.ageYears >= 18 && npc.ageStage !== `child`
    },
    function(town: any, npc: any) {
      const adventureRoll = randomRange(1, 100)

      let adventurePrefix: string
      let adventureResults: string

      if (npc.hasClass === false) {
        // Descriptions and stuff goes here
        return lifeEvents.backgroundWork.function(town, npc)
      } else {
        adventurePrefix = randomValue([
          `I went on an adventure, and `,
          `I went on a hike with a friend, and we got lost. It took us months to get back home, and on the way, I `,
          `I had a spur of the moment whim to go on an adventure, and on my journeys, I `,
          `I got really drunk, and woke up in the middle of nowhere. From there, I had to trek back home, and on the way, I `,
          `there was a mercenary company which I signed on with for a season. We did fairly standard stuff- things like guarding caravans, you know. One time, I was separated from the party, and I `,
        ])

        if (adventureRoll === 100) {
          const weapon = createMagicWeapon()
          adventureResults = `came across a magical weapon- this is my trusty ${weapon.name}<blockquote><h4>${weapon.name}</h4>${weapon.description}</blockquote>`
        } else if (adventureRoll >= 91) {
          adventureResults = `found a considerable amount of treasure.`
          npc.wealth += randomRange(5100, 7150)
        } else if (adventureRoll >= 81) {
          adventureResults = `found some treasure.`
          npc.wealth += dice(2, 600)
        } else if (adventureRoll >= 71) {
          adventureResults = `learnt a great deal about myself.`
        } else if (adventureRoll >= 61) {
          adventureResults = `came across something terrifying that still stalks the lands.`
        } else if (adventureRoll >= 51) {
          adventureResults = `lost something of sentimental value to me.`
        } else if (adventureRoll >= 41) {
          const poisoner = randomValue([`monster`, `trap`, `monster`])
          adventureResults = `was poisoned by a ${poisoner}, but recovered in due time.`
        } else if (adventureRoll >= 31) {
          adventureResults = `contracted a disease while exploring a filthy warren. I recovered, but I'm still not quite right.`
          npc.physicalTrait = randomValue([`pockmarked face`, `grey hair`])
        } else if (adventureRoll >= 21) {
          adventureResults = `was wounded, but recovered in time.`
        } else if (adventureRoll >= 11) {
          adventureResults = `was greivously wounded, but recovered in time. It still hurts, from time to time.`
        } else {
          adventureResults = `nearly died- that's how I got the scars.`
          npc.physicalTrait = randomValue([`a missing ear`, `a missing finger`, `two missing fingers`])
        }
      }
      return adventurePrefix + adventureResults
    },
  },
  supernatural: {
    probability: 2,
    exclusions(town: any, npc: any) {
      return true
    },
    function(town: any, npc: any) {
      return randomValue([
        `I came across a horde of ghouls feasting on a dead body in my youth.`,
        `I was ensorcelled by a fey for a year. It played tricks on my mind, making me see things which were not there, and not see things which were there.`,
        `I once woke up miles away from my home- I don't know if it was due to drinking or some other, magical force at work, but I've sworn off the grog ever since.`,
        `I had gone for a walk, when I found a horse. It spoke to me, and told me to leave the town I was in before sundown. I was planning on leaving anyway, so I did, and then when I had reached the next town, there were rumours that the village had been attacked by ghouls.`,
        `I went to find a sheep that had gone missing, and must have gotten lost- I ended up in a strange land, where the colours were not as they should have been. I eventually found my way back, but never found the missing sheep. It turned up, completely skeletised in my bed three days later.`,
        `I saw a miracle- honest to god. This old man had told us that he was the physical aspect of a deity, and one of the boys did not believe him. Then, with a wave of his hand, the boy vanished.`,
      ])
    },
  },
  miracle: {
    probability: 2,
    exclusions(town: any, npc: any) {
      return true
    },
    function(town: any, npc: any) {
      const miracleGiver = randomValue(lifeEvents.miracle.miracleGiver)
      const trueBelief = randomValue(lifeEvents.miracle.trueBelief)
      const falseBelief = randomValue(lifeEvents.miracle.falseBelief)
      const miracle = randomValue(lifeEvents.miracle.miracle)
      const curse = randomValue(lifeEvents.miracle.curse)
      return randomValue([
        `${randomValue([
          `I witnessed a miracle once- Honest to god. `,
          `I once saw a true miracle. `,
          `one time, I was part of a real miracle. `,
        ])} ${miracleGiver}, ${randomValue([trueBelief, falseBelief])} ${miracle}.`,
        `${randomValue([
          `I witnessed a terrible curse once- Honest to god. `,
          `I once saw a true curse. `,
          `one time, I was part of a real curse. `,
        ])} ${miracleGiver}, ${randomValue([falseBelief])} ${curse}.`,
      ])
    },
    miracleGiver: [
      `This old man had told us that he was the physical aspect of a deity and that he could prove it`,
      `An old woman once came into town claiming to be a god and told us she had cast a miracle on our town`,
      `A man stumbled into town claiming to be sent from a god and told us we were being blessed`,
      `My town was told by a passing prophet that a miracle was coming`,
      `My friends and I once came upon a snake who was trapped beneath a rock and we helped it out. The snake spoke to us and said a miracle would befall us soon`,
    ],
    trueBelief: [
      `and we all rejoiced.`,
      `and we were all a little skeptical at first.`,
      `but I was the only believer.`,
      `and some of us believed them.`,
      `and we were all very excited.`,
      `and the among believers us cried out in celebration.`,
    ],
    falseBelief: [
      `but one of us did not believe them.`,
      `but nobody believed them.`,
      `and I was the only one who did not believe them.`,
      `but nobody paid attention to them.`,
      `but some thought this to be blasphemy.`,
      `but my friend did not believe them.`,
    ],
    miracle: [
      `The next day all of the water in our well had been turned to mead`,
      `That year we had the most plentiful harvest we had ever seen`,
      `The next week, everyone in town had sprouted long thick beards, even the women`,
      `For the next year we had a huge economic boom in our town`,
      `The next day all of the sick and cripple in our town were suddenly cured of all their ailments`,
      `That night silver rained down from the sky`,
      `All who believed woke up to find a gold piece under their pillow`,
      `The next day our town leader recovered from an illness we thought for sure would take their life`,
      `Not long after that a band of adventurers came to our town and saved us from a terrible monster`,
      `A month later all the rats in town were gone`,
      `Overnight a statue of an unknown god appeared in the center of town`,
    ],
    curse: [
      `The next morning all the town water had been turned to mud`,
      `The next month the town granary burned to the ground`,
      `The next day all the non-believers found all their savings missing`,
      `That year all the town crops rotted in the fields`,
      `The next morning all the town livestock were found dead`,
      `That night the lost souls of our town rose from the dead and ransacked us`,
      `That night, monsters descended upon our town`,
      `The next month bandits came and looted the whole town`,
      `Within a few weeks, everyone in town had gotten terribly ill`,
      `The next morning all the children of the town had vanished`,
    ],
  },
  war: {
    probability: 5,
    exclusions(town: any, npc: any) {
      return npc.ageYears >= 18 && npc.ageStage !== `child`
    },
    function(town: any, npc: any) {
      const warRoll = randomRange(1, 12)
      const warStart = randomValue([
        `there was a minor skirmish with some orcs that I was involved with.`,
        `there was a small skirmish with a rivaling faction that I was drafted into.`,
        `there was a small war between a rival lord that I was forced to take part with.`,
        `there were some goblin raids which I had to defend my town from.`,
        `there was a pretty nasty zombie outbreak which I had to defend my town against.`,
        `there was a civil war within the town that I fought in.`,
      ])
      let warResults
      let warDescription
      if (warRoll === 12) {
        warResults = `I acquitted myself well in battle, and was awarded a medal for bravery.`
      } else if (warRoll >= 10) {
        warResults = `I managed to escape the battle unscathed, but many of my friends were killed or injured.`
      } else if (warRoll >= 8) {
        warResults = `I managed to survive, but I still have nightmares about what happened.`
      } else if (warRoll >= 5) {
        warResults = `I suffered only minor injuries, and the wounds all healed without leaving any scars.`
      } else if (warRoll >= 2) {
        warResults = `I suffered some serious injuries, and had to be carried off the field.`
        npc.physicalTrait = randomValue([
          `a long, thin scar running up the arm`,
          `a scar on the eye`,
          `a scar around the neck`,
          `a scar on the throat`,
          `a fiery red scar`,
          `a finger missing`,
          `two fingers missing`,
          `a chunk of left ear missing`,
          `a chunk of right ear missing`,
          `a scar through the eyebrow`,
          `a scar across the cheek`,
          `a scar on the nose`,
          `a scar down the forehead`,
          `a scar in the middle of the hand`,
          `a crooked scar along the jaw`,
        ])
      } else if (warRoll === 1) {
        warResults = `I was knocked out, and left for dead. I woke up hours later, after the battle was over, and had to walk injured for days to find aid.`
      }
      // eslint-disable-next-line prefer-const
      warDescription = `${warStart} ${warResults}`
      return warDescription
    },
  },
  crime: {
    probability: 10,
    exclusions(town: any, npc: any) {
      return professions[npc.profession].sector === `crime` || random(100) > 60
    },
    function(town: any, npc: any) {
      const crime = randomValue([
        `murder`,
        `theft`,
        `arson`,
        `assault`,
        `kidnapping`,
        `smuggling`,
        `extortion`,
        `counterfeiting`,
        `racketeering`,
        `fraud`,
        `illegal gambling`,
        `selling contraband `,
      ])

      const crimeRoll = randomRange(1, 12)

      if (crimeRoll >= 9) {
        return `I was caught and convicted of ${crime}, and spent ${randomRange(1, 4)} years ${randomValue([
          `in jail`,
          `chained to an oar`,
          `doing hard labour`,
        ])} before ${randomValue([`being released.`, `managing to escape.`])}`
      }

      if (crimeRoll >= 7) {
        return `I was nearly caught and convicted in the middle of ${crime}, but managed to escape. They are still after me, though.`
      }

      if (crimeRoll >= 4) {
        return `I was caught aiding and abetting the crime of ${crime}, but due to ${randomValue([
          `being forced to do it against my will`,
          `my amazing lawyer`,
          `being under a spell`,
        ])}, I was found not guilty.`
      }

      return `I was falsely accused of ${crime}, but eventually was acquitted. It took up years of my life, though, and I still get antsy around guards that I don't know.`
    },
  },
  arcaneMatters: {
    probability: 4,
    exclusions(town: any, npc: any) {
      return true
    },
    function(town: any, npc: any) {
      return randomValue([
        `I saw a demon I swear on my life! ${randomValue([
          ``,
          `It offered to make a deal with me, but I turned it down.`,
          `It challenged me to a lute playing competition.`,
          `I ran away before the thing could see me.`,
          `The image of that thing still haunts me.`,
          `It forced me into a contract, and I'm still not sure what I owe.`,
          `It was trapped inside of a summoning circle.`,
          `The thing tried to kill me but I got away!`,
          `Sometimes I think it is still hunting me.`,
        ])}`,
        `I once saw a powerful wizard ${randomValue([
          `${randomValue([`enchanting`, `disenchanting`, `cursing`])} a ${randomValue([
            `sword`,
            `mace`,
            `pair of greaves`,
            `set of armor`,
            `longbow`,
            `large batch of arrows`,
            `dagger`,
            `skull`,
            `large crystal`,
            `hatchet`,
            `crossbow`,
            `thick tome`,
            `book`,
            `pair of boots`,
            `fine looking hat`,
            `set of robes`,
            `quill`,
          ])}.`,
          `casting a ${randomValue([
            `very powerful`,
            `strong`,
            `rather weak`,
            `fairly strong`,
            `very weak`,
            `average looking`,
          ])} ${randomValue([
            `healing`,
            `lightning`,
            `fireball`,
            `fire`,
            `water`,
            `poison`,
            `light`,
            `wind`,
            `destruction`,
            `enchanting`,
            `illusion`,
            `magic`,
          ])} spell.`,
          `riding on the back of a ${randomValue([
            `gryphon`,
            `unicorn`,
            `lion`,
            `tiger`,
            `bear`,
            `elk`,
            `magnificent white steed`,
            `flying whale`,
            `giant eagle`,
            `dragon`,
            `strange demon`,
          ])}`,
        ])}`,
        `I once ${randomValue([
          `got caught in the cross-fires between two dueling`,
          `witnessed a battle between two`,
          `fought in a battle against`,
          `had my home destroyed by`,
          `settled down near a temple of`,
        ])} ${randomValue([
          `wizards`,
          `dragons`,
          `demons`,
          `witches`,
          `warlocks`,
          `necromancers`,
          `minor gods`,
          `magical beings`,
        ])}.`,
        `I had a mishap with ${randomValue([`a charm`, `an illusion`, `a mind control`])} spell- ${randomValue([
          `an old friend`,
          `an enemy`,
          `a dear friend`,
          `a family member`,
          `someone I thought of as family`,
          `an old rival`,
          `a rival of mine`,
        ])} ${randomValue([
          `tried to force me to hand over all my money`,
          `tried to take my family heirloom`,
          `tried to steal my fortune`,
          `tried to force me to give up my ancient relic`,
          `tried to fool me into giving up my title`,
        ])}, ${randomValue([
          `but I luckily managed to resist the spell.`,
          `but their spell failed`,
          `and sadly it worked`,
          `and I failed to resist the spell`,
          `but they were eventually caught by some brave adventurers`,
          `and I have been searching for them ever since`,
        ])}.`,
        `I once drank a ${randomValue([
          `really strong`,
          `crazy strong`,
          `strong`,
          `pretty weak`,
          `kind of weak`,
          `fairly average`,
          `powerful`,
          `rather diluted`,
        ])} potion- ${randomValue([
          `I swear to god, I could taste colours!`,
          `my hair was standing on end!`,
          `my skin turned bright ${randomValue([
            `red`,
            `purple`,
            `white`,
            `yellow`,
            `green`,
            `orange`,
            `pink`,
            `blue`,
            `violet`,
          ])} for several days.`,
          `I grew a thick bushy beard in a few hours!`,
          `it sent me into a comma for weeks.`,
          `everyone thought I was attractive for the rest of the day.`,
          `it made my nose glow in the dark for a week!`,
        ])}`,
        `I once found a cursed book. The book ${randomValue([
          `kills all who who read it`,
          `turned the reader blind`,
          `retold the reader's life but with a horrible twist ending`,
          `sucked the reader in to a nightmarish world`,
          `was alive and had gnarled teeth to bite anyone who dared to open it`,
          `forced you to see the dead`,
        ])}.`,
      ])
    },
  },
  weirdStuff: {
    probability: 1,
    exclusions(town: any, npc: any) {
      return true
    },
    function(town: any, npc: any) {
      return randomValue([
        `I came across a genie, ${randomValue([
          `but squandered the wish on an ex lover`,
          `but wasted the wish on the perfect sandwich`,
          `and used my wish to set him free`,
          `and used my wish to bring prosperity to my town`,
          `and used my wish to curse a rival`,
          `but never used my wishes`,
        ])}.`,
        `I was once swallowed by a giant fish. Spent a bloody month in there, subsisting on fish and the other things it ate as I tried to find my way out.`,
        `I met a ${randomValue([`demigod`, `arch-fey`, `lich`, `demon lord`, `titan`])} and lived to tell the tale.`,
        `I was once captured by a group of cultists. They nearly sacrificed me, but I managed to set one of their robes on fire, and escaped in the confusion.`,
        `I really have had some pretty bad luck in my love life in the past- one lover turned out to be a silver dragon. Took all my gold!`,
        `I had a bit of a nervous breakdown a while back, and spent a lot of time alone, stark raving mad. But I'm better now! Honest!`,
        `some bloody dragon held me as prisoner for a couple months. I was forced to polish all its gold! Luckily, I managed to escape when it tried to torch the nearby village.`,
        `believe it or not, I was a stone statue for quite a while; I only recently was released. I still feel pretty stiff, to be honest.`,
      ])
    },
  },
}
