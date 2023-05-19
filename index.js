const express = require('express')
const app = express()
require('dotenv').config()
const router = require('./routes')
const dbReady = require('./config/dbReady')

dbReady();

app.use(express.json())
app.use(router)


app.listen(8000)