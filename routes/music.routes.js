const express = require("express")
const router = express.Router()

router.get('/music', (req,res) => res.render('music/music-index'))

module.exports = router