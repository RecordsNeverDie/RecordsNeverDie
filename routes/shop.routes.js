const express = require("express")
const router = express.Router()
const multer = require('multer')
const cloudUploader = require('../configs/cloudinary.config')
const ensureLogin = require('connect-ensure-login')
const Product = require("../models/product.model")

router.get('/', (req, res) => {

    Product.find()
        .then(product => res.render('shop/shop-index', { product, user: req.user }))
        .catch(err => console.log("Ha habido un error!", err))    
})

router.get("/new", ensureLogin.ensureLoggedIn(), (req, res) => res.render("shop/shop-new"))

router.post("/new", cloudUploader.single('imageFile'), (req, res, next) => {

    let location = {
        type: 'Point',
        coordinates: [req.body.latitude, req.body.longitude]
    } 

    const { title, artist, genre, price, picture, description, condition } = req.body

    Product.create({ title, artist, genre, price, picture: req.file.url, description, condition, location })
        .then(() => res.redirect('/shop'))
        .catch(err => console.log("Hubo un error", err))
    
})

router.get("/edit", ensureLogin.ensureLoggedIn(), (req, res) => {
    Product.findById(req.query.id)
        .then(oneProduct => res.render('shop/shop-edit', oneProduct))
        .catch(err => console.log(`An error ocurred updating the place: ${err}`))
})

router.post('/edit/:id', cloudUploader.single('imageFile'), (req, res, next) => {
    
    let location = {
        type: 'Point',
        coordinates: [req.body.latitude, req.body.longitude]
    } 

    const newProduct = {
        title: req.body.title,
        artist: req.body.artist,
        genre: req.body.genre,
        price: req.body.price,
        description: req.body.description,
        condition: req.body.condition,
        location: location
    }

     if (req.file) {
        newProduct.picture = req.file.url
     }

    Product.findByIdAndUpdate(req.params.id, newProduct, { new: true })
        .then(() => res.redirect("/shop"))
        .catch(err => console.log(`An error ocurred updating the place: ${err}`))
})

router.get("/details/:id", (req, res) => {

    Product.findById(req.params.id)
        .then(product => res.render(res.render("shop/shop-details", {product, user: req.user}))
            .catch(err => {
                console.log(`An error ocurred: ${err}`)
                next()
            })
    ) 
    
    router.post('/:id/delete', ensureLogin.ensureLoggedIn(), (req, res, next) => {
        Product.findByIdAndRemove(req.params.id)
            .then(() => res.redirect('/shop'))
            .catch(err => console.log(`An error ocurred deleting the product: ${err}`))
    })

    router.get("/buy/:id", ensureLogin.ensureLoggedIn(), (req, res) => {
        Product.findById(req.params.id)
            .then(buyProduct => res.render('shop/shop-buy', { buyProduct }))
            .catch(err => console.log(`An error ocurred updating the place: ${err}`))
    })

    router.get('/details/:id/api', (req, res, next) => {
        Product.findById(req.params.id)
            .then(data => res.json(data))
            .catch(err => console.log(`Error: ${err}`))
    })
})

module.exports = router