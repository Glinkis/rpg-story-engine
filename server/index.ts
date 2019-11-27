import Sentry from "./sentry"
import compression from "compression"
import express, { Response } from "express"
import chalk from "chalk"
import { createTown } from "./engine/town/createTown"
import { randomValue } from "./engine/rolls"
import { inventory } from "./engine/world/inventory"
import { createColour } from "./engine/misc/colours"
import { createNPC } from "./engine/npc-generation/createNPC"
import { createFaction } from "./engine/factions/createFaction"
import { createGuard } from "./engine/town/createGuard"
import { createMagicTrinket } from "./engine/misc/createMagicTrinket"
import { createMagicWeapon } from "./engine/misc/createMagicWeapon"
import { createMercenaries, readoutMercenaries } from "./engine/misc/createMercenaries"
import { cheese } from "./engine/world/cheese"
import { medal } from "./engine/world/medal"
import { treasureMap } from "./engine/world/trasureMap"
import { ghost } from "./engine/world/ghost"
import { orcs } from "./engine/world/orcs"
import { goblins } from "./engine/world/goblins"
import { bunny } from "./engine/world/bunny"
import { cat } from "./engine/world/cat"
import { horse } from "./engine/world/horse"
import { wolf } from "./engine/world/wolf"
import { ogre } from "./engine/world/ogre"
import { spider } from "./engine/world/spider"
import { tree } from "./engine/world/tree"
import { cabin } from "./engine/world/cabin"
import { caravan } from "./engine/world/caravan"
import { road } from "./engine/world/road"
import { goblin } from "./engine/world/goblin"
import { bandits } from "./engine/world/bandits"
import { desert } from "./engine/world/desert"
import { newspaper } from "./engine/world/newspaper"
import { mountain } from "./engine/world/mountain"
import { cavern } from "./engine/world/cavern"
import { forest } from "./engine/world/forest"
import { initReactSSR } from "./react"

export const app = express()

// Compress responses.
app.use(compression({ threshold: 8 }))

// Integrate Sentry.
app.use(Sentry.Handlers.requestHandler())
app.use(Sentry.Handlers.errorHandler())

initReactSSR(app)

function sendJson(res: Response, object: any) {
  res.header(`Content-Type`, `application/json`)
  res.send(JSON.stringify(object, null, 2))
}

function createRouteListItem(html: string, route: any) {
  if (route.route) {
    // Ignore root and client routes.
    if ([`/`, `/client`].includes(route.route.path)) {
      return html
    }
    return `${html}\n<li><a href="${route.route.path}">${route.route.path}</a></li>`
  }
  return html
}

/**
 * Displays a list of available endpoints.
 */
app.get(`/`, (req, res) => {
  res.header(`Content-Type`, `text/html`)
  res.send(`
    <a href="/client">Client</a>
    <h1>Available Endpoints:</h1>
    <ul>${app._router.stack.reduce(createRouteListItem, ``)}</ul>
  `)
})

/**
 * Available endpoints.
 */
app
  .get(`/town`, (req, res) => sendJson(res, createTown()))
  .get(`/inventory`, (req, res) => sendJson(res, randomValue(inventory)))
  .get(`/newspaper`, (req, res) => sendJson(res, randomValue(newspaper)))
  .get(`/colour`, (req, res) => sendJson(res, createColour()))
  .get(`/forest`, (req, res) => sendJson(res, forest.create(createTown())))
  .get(`/cheese`, (req, res) => sendJson(res, cheese.readout(cheese.create())))
  .get(`/medal`, (req, res) => sendJson(res, medal.readout(medal.create())))
  .get(`/treasure-map`, (req, res) => sendJson(res, treasureMap.readout(treasureMap.create())))
  .get(`/caravan`, (req, res) => sendJson(res, caravan.readout(caravan.create())))
  .get(`/ghost`, (req, res) => sendJson(res, ghost.readout(ghost.create())))
  .get(`/orcs`, (req, res) => sendJson(res, orcs.readout(orcs.create())))
  .get(`/ogre`, (req, res) => sendJson(res, ogre.readout(ogre.create())))
  .get(`/spider`, (req, res) => sendJson(res, spider.readout(spider.create())))
  .get(`/goblins`, (req, res) => sendJson(res, goblins.readout(goblins.create())))
  .get(`/goblin`, (req, res) => sendJson(res, goblin.readout(goblin.create())))
  .get(`/bunny`, (req, res) => sendJson(res, bunny.readout(bunny.create())))
  .get(`/cat`, (req, res) => sendJson(res, cat.readout(cat.create())))
  .get(`/horse`, (req, res) => sendJson(res, horse.readout(horse.create())))
  .get(`/wolf`, (req, res) => sendJson(res, wolf.readout(wolf.create())))
  .get(`/magic-weapon`, (req, res) => sendJson(res, createMagicWeapon()))
  .get(`/magic-trinket`, (req, res) => sendJson(res, createMagicTrinket()))
  .get(`/guard`, (req, res) => sendJson(res, createGuard(createTown())))
  .get(`/bandits`, (req, res) => sendJson(res, bandits.readout(bandits.create())))
  .get(`/mercenaries`, (req, res) => sendJson(res, readoutMercenaries(createMercenaries(createTown()))))
  .get(`/faction`, (req, res) => sendJson(res, createFaction(createTown())))
  .get(`/npc`, (req, res) => sendJson(res, createNPC(createTown())))
  .get(`/tree`, (req, res) => sendJson(res, tree.readout(tree.create())))
  .get(`/cavern`, (req, res) => sendJson(res, cavern.readout(cavern.create())))
  .get(`/cabin`, (req, res) => sendJson(res, cabin.readout(cabin.create())))
  .get(`/road`, (req, res) => sendJson(res, road.readout(road.create())))
  .get(`/desert`, (req, res) => sendJson(res, desert.readout(desert.create())))
  .get(`/mountain`, (req, res) => sendJson(res, mountain.readout(mountain.create())))

app.listen(process.env.PORT || 5000, () => {
  console.clear()
  console.log(chalk.green(`The server has started, and is available at:`))
  console.log(chalk.cyan(`http://localhost:5000`))
})
