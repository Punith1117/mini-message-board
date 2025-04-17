
const { Client } = require("pg");
require('dotenv').config()

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 400 ),
  name VARCHAR ( 100 ),
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, name) 
VALUES
  ('Hello there!', 'Punith'),
  ('Send new messages by clicking the link below!', 'Punith');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.EXTERNAL_DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
