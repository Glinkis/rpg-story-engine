import compression from "compression"
import express from "express"
import * as alchemist from "./engine/alchemist/data"
import * as blacksmith from "./engine/blacksmith/data"

const app = express()

// Compress responses.
app.use(compression({ threshold: 8 }))

app.get("/", (req, res) => {
  res.header("Content-Type", "application/json")
  res.write("Alchemist:\n")
  res.write(JSON.stringify(alchemist))
  res.write("\n\n")
  res.write("Blacksmith:\n")
  res.write(JSON.stringify(blacksmith))
  res.end()
})

app.listen(process.env.PORT || 5000)
