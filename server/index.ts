import compression from "compression"
import express, { Response } from "express"
import chalk from "chalk"
import { createTown } from "./engine/town/createTown"
import { randomValue } from "./engine/rolls"
import { inventory } from "./engine/world/inventory"
import { createColour } from "./engine/misc/colours"
import { createNPC } from "./engine/npc-generation/createNPC"

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

app.get(`/`, (req, res) => {
  sendJson(res, createTown())
})

app.get(`/inventory`, (req, res) => {
  sendJson(res, randomValue(inventory))
})

app.get(`/colour`, (req, res) => {
  sendJson(res, createColour())
})

app.get(`/npc`, (req, res) => {
  sendJson(res, createNPC(createTown()))
})

app.listen(process.env.PORT || 5000, () => {
  console.clear()
  console.log(chalk.green(`The server has started, and is available at:`))
  console.log(chalk.cyan(`http://localhost:5000`))
})
