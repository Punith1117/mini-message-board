const express = require('express')
const path = require("node:path");

const app = express()
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const publicDir = path.join(__dirname, 'public')
app.use(express.static(publicDir))

app.get('/', (req, res) => {
    res.render('index')
})

const PORT = 3000
app.listen(PORT, () => {
    console.log('Server started successfully')
})