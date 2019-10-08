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
    const result = await client.query("SELECT * FROM test_table")

    res.send(result ? result.rows : null)
    client.release()
  } catch (err) {
    console.error(err)
    res.send("Error " + err)
  }
})

app.listen(port, () => {
  console.log(`server listening on port: ${port}`)
})
