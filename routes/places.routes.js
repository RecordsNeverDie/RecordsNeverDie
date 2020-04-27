const express = require("express")
const router = express.Router()
const Place = require('../models/place.model')
const User = require('../models/user.model')

// list
router.get('/', (req,res) => {
    Place.find()
    //.populate('user_id')
    .then(allPlaces => res.render('places/places-index', {places: allPlaces}))
    .catch(err => console.log(`Ha ocurrido un error: ${err}`)) 
})


// details
router.get('/details/:id', (req, res, next) => {
    const placeId = req.params.id 

    Place.findById(placeId)
    .then(onePlace => res.render('places/places-details', onePlace))
    .catch(err => console.log(`Ha ocurrido un error: ${err}`)) 
})

module.exports = router