const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./models/grupoRepository')

db.connect()
app.use(cors())
app.use(express.json())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const grupos = require("./routes/grupoRoutes")

app.use('/', grupos)

module.exports = app