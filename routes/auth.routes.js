const express = require("express")
const router = express.Router()
const passport = require("passport")
const bcrypt = require("bcrypt")
const bcryptSalt = 10
const multer = require('multer')
const cloudUploader = require('../configs/cloudinary.config')
const ensureLogin = require('connect-ensure-login')
const User = require("../models/user.model")

// User signup
router.get("/signup", (req, res) => res.render("auth/signup"))
router.post("/signup", cloudUploader.single('imageFile'), (req, res, next) => {

    const { name, username, email, password } = req.body

    if (!username || !password) {
        res.render("auth/signup", { errorMsg: "Rellena el usuario y la contraseña" })
        return
    }

    User.findOne({ username })
        .populate('vinyls')
        .populate('store')
        .then(user => {
            if (user) {
                res.render("auth/signup", { errorMsg: "El usuario ya existe en la BBDD" })
                return
            }
            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)
            
            User.create({ name, username, email, password: hashPass, picture: req.file.url, store: placeCreated._id })
            console.log('llegas aqui?', populate('vinyls'))
                .then(() => res.redirect("/"))
                .catch(() => res.render("auth/signup", { errorMsg: "No se pudo crear el usuario" }))
        })
        .catch(error => next(error))
})


// User login
router.get('/login', (req, res) => res.render('auth/login', { "errorMsg": req.flash("error") }))
router.post('/login', passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true,
    badRequestMessage: 'Rellena todos los campos'
}))


// User logout
router.get("/logout", (req, res) => {
    req.logout()
    res.redirect("/login")
})

router.get('/profile', ensureLogin.ensureLoggedIn(), (req,res) => {
    res.render('auth/profile', {
        user: req.user
    })
})

module.exports = router