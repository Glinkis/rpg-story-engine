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
import { createMercenaries } from "./engine/misc/createMercenaries"
import { misc } from "./engine/world/miscData"
import { cheese } from "./engine/world/cheese"
import { medal } from "./engine/world/medal"
import { treasureMap } from "./engine/world/trasureMap"
import { ghost } from "./engine/world/ghost"
import { orcs } from "./engine/world/orcs"
import { goblins } from "./engine/world/goblins"
import { bunny } from "./engine/world/bunny"
import { cat } from "./engine/world/cat"

const app = express()

// Compress responses.
app.use(compression({ threshold: 8 }))

function sendJson(res: Response, object: any) {
  res.header(`Content-Type`, `application/json`)
  try {
    res.send(JSON.stringify(object, null, 2))
  } catch (error) {
    res.send(error.stack)
  }
}

function createRouteListItem(html: string, route: any) {
  if (route.route) {
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
  .get(`/colour`, (req, res) => sendJson(res, createColour()))
  .get(`/cheese`, (req, res) => sendJson(res, cheese.readout(cheese.create())))
  .get(`/medal`, (req, res) => sendJson(res, medal.readout(medal.create())))
  .get(`/treasure-map`, (req, res) => sendJson(res, treasureMap.readout(treasureMap.create())))
  .get(`/caravan`, (req, res) => sendJson(res, misc.caravan.create(createTown())))
  .get(`/ghost`, (req, res) => sendJson(res, ghost.readout(ghost.create())))
  .get(`/orcs`, (req, res) => sendJson(res, orcs.readout(orcs.create())))
  .get(`/goblins`, (req, res) => sendJson(res, goblins.readout(goblins.create())))
  .get(`/goblin`, (req, res) => sendJson(res, misc.goblin.create()))
  .get(`/bunny`, (req, res) => sendJson(res, bunny.readout(bunny.create())))
  .get(`/cat`, (req, res) => sendJson(res, cat.readout(cat.create())))
  .get(`/horse`, (req, res) => sendJson(res, misc.horse.create()))
  .get(`/wolf`, (req, res) => sendJson(res, misc.wolf.create()))
  .get(`/magic-weapon`, (req, res) => sendJson(res, createMagicWeapon()))
  .get(`/magic-trinket`, (req, res) => sendJson(res, createMagicTrinket()))
  .get(`/guard`, (req, res) => sendJson(res, createGuard(createTown())))
  .get(`/bandits`, (req, res) => sendJson(res, misc.bandits.create(createTown())))
  .get(`/mercenaries`, (req, res) => sendJson(res, createMercenaries(createTown())))
  .get(`/faction`, (req, res) => sendJson(res, createFaction(createTown())))
  .get(`/npc`, (req, res) => sendJson(res, createNPC(createTown())))

app.listen(process.env.PORT || 5000, () => {
  console.clear()
  console.log(chalk.green(`The server has started, and is available at:`))
  console.log(chalk.cyan(`http://localhost:5000`))
})
