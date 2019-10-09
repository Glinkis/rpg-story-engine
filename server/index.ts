import compression from "compression"
import express from "express"
import * as alchemist from "./engine/alchemist/data"
import * as blacksmith from "./engine/blacksmith/data"
import { createTown } from "./engine/town/create"
import { red } from "color-name"

const app = express()

// Compress responses.
app.use(compression({ threshold: 8 }))

app.get("/", (req, res) => {
  res.header("Content-Type", "application/json")
  try {
    res.send(JSON.stringify(createTown(), null, 2))
  } catch (error) {
    console.error(error)
    res.send("ERROR " + JSON.stringify(error, null, 2))
  }
})

app.listen(process.env.PORT || 5000)
