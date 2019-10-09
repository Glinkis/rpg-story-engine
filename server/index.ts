import compression from "compression"
import express from "express"
import { createTown } from "./engine/town/createTown"

const app = express()

// Compress responses.
app.use(compression({ threshold: 8 }))

app.get("/", (req, res) => {
  res.header("Content-Type", "application/json")
  try {
    res.send(JSON.stringify(createTown(), null, 2))
  } catch (error) {
    console.error(error)
    res.send(error.stack)
  }
})

app.listen(process.env.PORT || 5000)
