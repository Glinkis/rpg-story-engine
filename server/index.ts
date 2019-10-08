import express from "express"
import { pool } from "../client/database"

const app = express()
const port = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.send("Success!")
})

app.get("/db", async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query("SELECT * FROM TEST")
    client.release()

    res.send(result ? result.rows : null)
  } catch (error) {
    res.send(error)
  }
})

app.listen(port)
