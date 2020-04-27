const express = require("express")
const router = express.Router()
const multer = require('multer')
const cloudUploader = require('../configs/cloudinary.config')

const ensureLogin = require('connect-ensure-login')
const Product = require("../models/product.model")

router.get('/', (req, res) => {

    Product.find()
        .then(allProducts => res.render('shop/shop-index', { allProducts }))
        .catch(err => console.log("Ha habido un error!", err))    
})

router.get("/new", ensureLogin.ensureLoggedIn(), (req, res) => res.render("shop/shop-new"))

router.post("/new", cloudUploader.single('picture'), (req, res, next) => {

    console.log(req.body)
    const { title, artist, genre, price, picture, description, condition, location } = req.body

    Product.create({ title, artist, genre, price, picture: req.file.url, description, condition, location })
        .then(() => res.redirect('/shop'))
        .catch(err => console.log("Hubo un error", err))
    
})

router.get("/edit", ensureLogin.ensureLoggedIn(), (req, res) => {
    Product.findById(req.query.id)
        .then(oneProduct => res.render('shop/shop-edit', oneProduct))
        .catch(err => console.log(`An error ocurred updating the place: ${err}`))
})

router.post('/edit/:id', cloudUploader.single('picture'), (req, res, next) => {
    
    let location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    } 

    const newProduct = {
        title: req.body.title,
        artist: req.body.artist,
        genre: req.body.genre,
        price: req.body.price,
        picture: req.file.url,
        description: req.body.description,
        condition: req.body.condition,
        location: location
    }
    
    //  if (req.body.picture) {
    //      newProduct[picture] = req.body.picture
    //  }


    //  if (req.file.url) {
    //     newProduct[picture] = req.file.url
    //  }

    Product.findByIdAndUpdate(req.params.id, newProduct, { new: true })
        .then(() => res.redirect("/shop"))
        .catch(err => console.log(`An error ocurred updating the place: ${err}`))
})

router.get("/details/:id", (req, res) => {

    Product.findById(req.params.id)
        .then(productDetails => res.render(res.render("shop/shop-details", productDetails))
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

    router.get("/buy/:id", ensureLogin.ensureLoggedIn(), (req, res) => res.render("shop/shop-buy"))

})


module.exports = router