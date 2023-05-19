const express = require('express')
const router = express.Router()
const apiRoutes = require("./api")

const api = process.env.BASEURL ;

router.use(api, apiRoutes)

router.use(api, (req,res)=>{res.json({erorr:"No Api Found On This Route"})})

module.exports = router;