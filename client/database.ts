import { Pool } from "pg"

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
})

const selectTest = `
  SELECT * FROM TEST
`

const createTest = `
  CREATE TABLE TEST(
    ID INT PRIMARY KEY NOT NULL,
  );
`

async function setup() {
  try {
    const client = await pool.connect()
    const selectedTest = await client.query(selectTest)

    if (!selectedTest) {
      const createdTest = await client.query(createTest)
      console.log(createdTest)
    }

    client.release()
  } catch (error) {
    console.error(error)
  }
}

setup()
