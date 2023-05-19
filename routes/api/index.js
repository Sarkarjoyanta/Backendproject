const express = require('express')
const router = express.Router()

const athentication = require("./auth.js")

router.use("/auth", athentication)

module.exports = router;