import compression from "compression"
import express from "express"

const app = express()
const port = process.env.PORT || 5000

const obj = {
  key0: "value0",
  key1: "value2",
  key2: "value3",
}

app.get("/", (req, res) => {
  res.header("Content-Type", "application/json")
  res.send(JSON.stringify(obj, null, 2))
})

app.use(compression())
app.listen(port)
