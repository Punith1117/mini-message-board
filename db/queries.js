const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertMessage(text, name) {
  await pool.query("INSERT INTO messages (text, name) VALUES ($1, $2)", [text, name]);
}

module.exports = {
  getAllMessages,
  insertMessage,
};
