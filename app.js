require('dotenv').config()

// Database
require('./configs/mongoose.config')

// Debugger
require('./configs/debugger.config')

// App
const express = require('express')
const app = express()

// Configs
require('./configs/preformatter.config')(app)
require('./configs/middleware.config')(app)
require('./configs/passport.config')(app)
require('./configs/views.configs')(app)
require('./configs/locals.config')(app)
// require('./configs/spotify.config')(app)


// Base URLS
app.use('/', require('./routes/index.routes'))
app.use('/', require('./routes/auth.routes'))
app.use('/music', require('./routes/music.routes'))
app.use('/places', require('./routes/places.routes'))
app.use('/shop', require('./routes/shop.routes'))

module.exports = app
