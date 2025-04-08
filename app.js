const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];
  
const express = require('express')
const path = require("node:path");

const app = express()
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const publicDir = path.join(__dirname, 'public')
app.use(express.static(publicDir))
app.use(express.urlencoded({extended: true}))

app.post('/new', (req, res) => {
  messages.push({ text: req.body.message, user: req.body.user, added: new Date()})
  res.redirect('/')
})
app.get('/new', (req, res) => {
  res.render('new')
})
app.get('/', (req, res) => {
    res.render('index', { messages: messages })
})

const PORT = 3000
app.listen(PORT, () => {
    console.log('Server started successfully')
})