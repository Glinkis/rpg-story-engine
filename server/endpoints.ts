import { Express, Response } from "express"

import { bandits } from "./engine/world/bandits"
import { bunny } from "./engine/world/bunny"
import { cabin } from "./engine/world/cabin"
import { caravan } from "./engine/world/caravan"
import { cat } from "./engine/world/cat"
import { cavern } from "./engine/world/cavern"
import { cheese } from "./engine/world/cheese"
import { createColour } from "./engine/misc/colours"
import { createFaction } from "./engine/factions/createFaction"
import { createGuard } from "./engine/town/createGuard"
import { createMagicTrinket } from "./engine/misc/createMagicTrinket"
import { createMagicWeapon } from "./engine/misc/createMagicWeapon"
import { createMercenaries, readoutMercenaries } from "./engine/misc/createMercenaries"
import { createNPC } from "./engine/npc-generation/createNPC"
import { createTown } from "./engine/town/createTown"
import { desert } from "./engine/world/desert"
import { forest } from "./engine/world/forest"
import { ghost } from "./engine/world/ghost"
import { goblin } from "./engine/world/goblin"
import { goblins } from "./engine/world/goblins"
import { horse } from "./engine/world/horse"
import { inventory } from "./engine/world/inventory"
import { medal } from "./engine/world/medal"
import { mountain } from "./engine/world/mountain"
import { newspaper } from "./engine/world/newspaper"
import { ogre } from "./engine/world/ogre"
import { orcs } from "./engine/world/orcs"
import { randomValue } from "./engine/rolls"
import { road } from "./engine/world/road"
import { spider } from "./engine/world/spider"
import { treasureMap } from "./engine/world/trasureMap"
import { tree } from "./engine/world/tree"
import { wolf } from "./engine/world/wolf"

/**
 * Initialize endpoints.
 */
export function initEndpoints(app: Express) {
  app
    .get(`/bandits`, (req, res) => sendJson(res, bandits.readout(bandits.create())))
    .get(`/bunny`, (req, res) => sendJson(res, bunny.readout(bunny.create())))
    .get(`/cabin`, (req, res) => sendJson(res, cabin.readout(cabin.create())))
    .get(`/caravan`, (req, res) => sendJson(res, caravan.readout(caravan.create())))
    .get(`/cat`, (req, res) => sendJson(res, cat.readout(cat.create())))
    .get(`/cavern`, (req, res) => sendJson(res, cavern.readout(cavern.create())))
    .get(`/cheese`, (req, res) => sendJson(res, cheese.readout(cheese.create())))
    .get(`/colour`, (req, res) => sendJson(res, createColour()))
    .get(`/desert`, (req, res) => sendJson(res, desert.readout(desert.create())))
    .get(`/faction`, (req, res) => sendJson(res, createFaction(createTown())))
    .get(`/forest`, (req, res) => sendJson(res, forest.create(createTown())))
    .get(`/ghost`, (req, res) => sendJson(res, ghost.readout(ghost.create())))
    .get(`/goblin`, (req, res) => sendJson(res, goblin.readout(goblin.create())))
    .get(`/goblins`, (req, res) => sendJson(res, goblins.readout(goblins.create())))
    .get(`/guard`, (req, res) => sendJson(res, createGuard(createTown())))
    .get(`/horse`, (req, res) => sendJson(res, horse.readout(horse.create())))
    .get(`/inventory`, (req, res) => sendJson(res, randomValue(inventory)))
    .get(`/magic-trinket`, (req, res) => sendJson(res, createMagicTrinket()))
    .get(`/magic-weapon`, (req, res) => sendJson(res, createMagicWeapon()))
    .get(`/medal`, (req, res) => sendJson(res, medal.readout(medal.create())))
    .get(`/mercenaries`, (req, res) => sendJson(res, readoutMercenaries(createMercenaries(createTown()))))
    .get(`/mountain`, (req, res) => sendJson(res, mountain.readout(mountain.create())))
    .get(`/newspaper`, (req, res) => sendJson(res, randomValue(newspaper)))
    .get(`/npc`, (req, res) => sendJson(res, createNPC(createTown())))
    .get(`/ogre`, (req, res) => sendJson(res, ogre.readout(ogre.create())))
    .get(`/orcs`, (req, res) => sendJson(res, orcs.readout(orcs.create())))
    .get(`/road`, (req, res) => sendJson(res, road.readout(road.create())))
    .get(`/spider`, (req, res) => sendJson(res, spider.readout(spider.create())))
    .get(`/town`, (req, res) => sendJson(res, createTown()))
    .get(`/treasure-map`, (req, res) => sendJson(res, treasureMap.readout(treasureMap.create())))
    .get(`/tree`, (req, res) => sendJson(res, tree.readout(tree.create())))
    .get(`/wolf`, (req, res) => sendJson(res, wolf.readout(wolf.create())))
}

function sendJson(res: Response, object: any) {
  res.header(`Content-Type`, `application/json`)
  res.send(JSON.stringify(object, null, 2))
}
