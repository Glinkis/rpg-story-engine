import { Pool } from "pg"

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
})

const createTest = `
  CREATE TABLE IF NOT EXISTS test(
    id INT PRIMARY KEY NOT NULL
  );
`

async function setup() {
  try {
    const client = await pool.connect()
    await client.query(createTest)
    client.release()
  } catch (error) {
    console.error(error)
  }
}

setup()
