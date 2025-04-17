require('dotenv').config()
const db = require('./db/queries')
const express = require('express')
const path = require("node:path");

const app = express()
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const publicDir = path.join(__dirname, 'public')
app.use(express.static(publicDir))
app.use(express.urlencoded({extended: true}))

app.post('/new', async (req, res) => {
  if (req.body.name == '') req.body.name = 'Secret user 🤫'
  await db.insertMessage(req.body.message, req.body.name)
  res.redirect('/')
})

app.get('/new', (req, res) => {
  res.render('new')
})

app.get('/', async (req, res) => {
  let messages = await db.getAllMessages()
  res.render('index', { messages: messages })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('Server started successfully')
})