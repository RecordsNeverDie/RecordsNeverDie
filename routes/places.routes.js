const express = require("express")
const router = express.Router()
const ensureLogin = require('connect-ensure-login')
const Place = require('../models/place.model')
const User = require('../models/user.model')

router.get('/', (req,res) => {
    Place.find()
    .then(allPlaces => res.render('places/places-index', {places: allPlaces, user: req.user}))
    .catch(err => console.log(`Ha ocurrido un error en el listado de lugares: ${err}`)) 
})

router.get('/details/:id', (req, res, next) => {
    const placeId = req.params.id 

    Place.findById(placeId)
    .then(place => {
        let isAuthor = false
        if(req.user && place.creator){
            if (place.creator.toString() === req.user._id.toString()) {
                isAuthor = true  
            }
        }
 
     res.render('places/places-details', {place, user: req.user, isAuthor})

    })
    .catch(err => console.log(`Ha ocurrido un error viendo los detalles del lugar: ${err}`)) 
})

router.get('/new', ensureLogin.ensureLoggedIn(), (req, res, next) => res.render('places/places-new'))
router.post('/new', (req,res, next) => {

    let location = {
        type: 'Point',
        coordinates: [req.body.latitude, req.body.longitude]
    }

    const newPlace = new Place({
        name: req.body.name,
        genre: req.body.genre,
        rating: req.body.rating,
        description: req.body.description,
        location,
        creator: req.user._id
    })
    
    Place.create(newPlace)
    .then((placeCreated) => User.findByIdAndUpdate(req.user._id, {$push: {store: placeCreated._id}}))
       .then(() => res.redirect('/places'))

    .catch(err => console.log(`Ha ocurrido un error creando el lugar: ${err}`)) 
    })

router.get('/edit', ensureLogin.ensureLoggedIn(), (req, res, next) => {
    const placeId = req.query.id 

    Place.findById(placeId)
    .then(onePlace => res.render('places/places-edit', onePlace))
    .catch(err => console.log(`Ha ocurrido un error editando el lugar: ${err}`)) 
})

router.post('/edit/:id', (req, res, next) => {
    const placeId = req.params.id

    let location = {
        type: 'Point',
        coordinates: [req.body.latitude, req.body.longitude]
    }

    const newPlace = {
        name: req.body.name,
        genre: req.body.genre,
        rating: req.body.rating,
        description: req.body.description,
        location: location
    }

    Place.findByIdAndUpdate(placeId, newPlace, { new: true })
    .then(() => res.redirect('/places'))
    .catch(err => console.log(`Ha ocurrido un error actualizando el lugar: ${err}`)) 
})


router.post('/:id/delete', ensureLogin.ensureLoggedIn(), (req, res, next) => {
    const placeId = req.params.id

    Place.findByIdAndRemove(placeId)
    .then(() => res.redirect('/places'))
    .catch(err => console.log(`Ha ocurrido un error eliminando el lugar: ${err}`)) 
})

router.get('/api', (req, res, next) => {
    Place.find()
        .then(data => res.json(data))
        .catch(err => console.log(`Error: ${err}`)) 
})

module.exports = router