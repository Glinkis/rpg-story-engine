import express from "express"
import { Pool } from "pg"

const app = express()

app.get("/", (req, res) => {
  res.send("Success!")
})

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
})
