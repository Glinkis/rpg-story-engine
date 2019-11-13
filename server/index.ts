import compression from "compression"
import express, { Response } from "express"
import chalk from "chalk"
import { createTown } from "./engine/town/createTown"
import { randomValue } from "./engine/rolls"
import { inventory } from "./engine/world/inventory"
import { createColour } from "./engine/misc/colours"
import { createNPC } from "./engine/npc-generation/createNPC"
import { createFaction } from "./engine/factions/createFaction"
import { createAlchemist } from "./engine/alchemist/createAlchemist"
import { createGuard } from "./engine/town/createGuard"

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

app.get(`/`, (req, res) => {
  res.header(`Content-Type`, `text/html`)
  res.send(`
    <h1>Available Endpoints:</h1>
    <ul>${app._router.stack.reduce(createRouteListItem, ``)}</ul>
  `)
})

app.get(`/town`, (req, res) => {
  sendJson(res, createTown())
})

app.get(`/inventory`, (req, res) => {
  sendJson(res, randomValue(inventory))
})

app.get(`/colour`, (req, res) => {
  sendJson(res, createColour())
})

app.get(`/guard`, (req, res) => {
  sendJson(res, createGuard(createTown()))
})

app.get(`/faction`, (req, res) => {
  sendJson(res, createFaction(createTown()))
})

app.get(`/npc`, (req, res) => {
  sendJson(res, createNPC(createTown()))
})

app.listen(process.env.PORT || 5000, () => {
  console.clear()
  console.log(chalk.green(`The server has started, and is available at:`))
  console.log(chalk.cyan(`http://localhost:5000`))
})
