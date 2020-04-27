const express = require("express")
const router = express.Router()

router.get('/places', (req,res) => res.render('places/places-index'))

module.exports = router