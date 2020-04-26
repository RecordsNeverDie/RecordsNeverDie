const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.render('index'))
router.get('/shop', (req, res) => res.render('shop/shop-index'))
router.get('/places', (req,res) => res.render('places/places-index'))
router.get('/music', (req,res) => res.render('music/music-index'))

module.exports = router