const express = require("express")
const router = express.Router()

const Product = require("../models/product.model")

router.get('/shop', (req, res) => {

    Product.find()
        .then(allProducts => res.render('shop/shop-index', { allProducts }))
        .catch(err => console.log("Ha habido un error!", err))
    
})

router.get("/shop/new", (req, res) => res.render("shop/shop-new"))

router.post("/shop/new", (req, res, next) => {

    console.log(req.body)
    const { title, artist, genre, price, picture, description, condition, location } = req.body

    Product.create({ title, artist, genre, price, picture, description, condition, location })
        .then(() => res.redirect('/shop'))
        .catch(err => console.log("Hubo un error", err))
    
})

router.get("/shop/edit", (req, res) => res.render("shop/shop-edit"))

// POSSSSSSTTTTTTTTT

router.get("/shop/details/:id", (req, res) => {

    Product.findById(req.params.id)
        .then(productDetails => res.render(res.render("shop/shop-details", productDetails))
            .catch(err => {
                console.log(`An error ocurred: ${err}`)
                next()
            })
        ) 
})


module.exports = router