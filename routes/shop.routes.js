const express = require("express")
const router = express.Router()
const multer = require('multer')
const cloudUploader = require('../configs/cloudinary.config')
const ensureLogin = require('connect-ensure-login')
const Product = require("../models/product.model")
const User = require('../models/user.model')

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
    
    const newProduct = new Product({
        title: req.body.title,
        artist: req.body.artist,
        genre: req.body.genre,
        price: req.body.price,
        description: req.body.description,
        condition: req.body.condition,
        picture: req.file.url,
        location,
        creator: req.user._id
    })

    Product.create(newProduct)
        .then((productCreated) => {
            console.log(productCreated)
            return User.findByIdAndUpdate(req.user._id, {$push: {vinyl: productCreated._id}})
        })
        .then(() => res.redirect('/shop'))
        .catch(err => console.log(`Ha ocurrido un error creando el producto: ${err}`)) 
    
    })

router.get("/edit", ensureLogin.ensureLoggedIn(), (req, res) => {
    Product.findById(req.query.id)
        .then(oneProduct => res.render('shop/shop-edit', oneProduct))
        .catch(err => console.log(`Ha ocurrido un error editandoel producto: ${err}`)) 
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
        location

    }

     if (req.file) {
        newProduct.picture = req.file.url
     }

    Product.findByIdAndUpdate(req.params.id, newProduct, { new: true })
        .then(() => res.redirect("/shop"))
        .catch(err => console.log(`An error ocurred updating the place: ${err}`))
})

router.get("/details/:id", (req, res) => {
    const shopId = req.params.id

    Product.findById(shopId)
        .then(product => {
            let isAuthor = false
            if (req.user && product.creator) {
                if (product.creator.toString() === req.user._id.toString()) {
                    isAuthor = true
                }
            }
        res.render("shop/shop-details", {product, user: req.user, isAuthor})
        })

        .catch(err => console.log(`An error ocurred: ${err}`)) 
})

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


module.exports = router