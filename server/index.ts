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
  .get(`/ghost`, (req, res) => sendJson(res, misc.ghost.create()))
  .get(`/orcs`, (req, res) => sendJson(res, misc.orcs.create()))
  .get(`/goblins`, (req, res) => sendJson(res, misc.goblins.create()))
  .get(`/bunny`, (req, res) => sendJson(res, misc.bunny.create()))
  .get(`/cat`, (req, res) => sendJson(res, misc.cat.create()))
  .get(`/horse`, (req, res) => sendJson(res, misc.horse.create()))
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
