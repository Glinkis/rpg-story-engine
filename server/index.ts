import express from "express"
import { pool } from "../client/database"
import * as enums from "./enums"

const app = express()
const port = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.send("Success!")
})

app.get("/enums", (req, res) => {
  res.send(enums)
})

app.get("/db", async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query("SELECT * FROM test")
    res.send(result ? result.rows : null)
    client.release()
  } catch (error) {
    res.send(error)
  }
})

app.listen(port)
