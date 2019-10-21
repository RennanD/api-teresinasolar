require('dotenv').config()
const path = require('path')
const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)

app.listen(process.env.PORT)