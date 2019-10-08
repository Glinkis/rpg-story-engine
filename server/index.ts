import express from "express"
import * as enums from "./enums"

const app = express()
const port = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.header("Content-Type", "application/json")
  res.send(JSON.stringify(enums.WEALTH.POOR, null, 2))
})

app.listen(port)
