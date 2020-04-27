const mongoose = require('mongoose')
//const User = require('../models/user.model')
//const Place = require('../models/place.model')
const Product = require('../models/product.model')
const dbName = 'Records-never-die'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })
const bcrypt = require('bcrypt')
const bcryptSalt = 10
const salt = bcrypt.genSaltSync(bcryptSalt)


// const users = [
//     {
//         name: 'Patricia',
//         username: 'Patylla',
//         email: 'p@p.com',
//         password: bcrypt.hashSync('patricia', salt),
//         picture: ''
//     },
//     {
//         name: 'Ruben',
//         username: 'Rub',
//         email: 'r@r.com',
//         password: bcrypt.hashSync('ruben', salt),
//         picture: ''
//     },
//     {
//         name: 'Jose',
//         username: 'JJ',
//         email: 'j@j.com',
//         password: bcrypt.hashSync('jose', salt),
//         picture: ''
//     },
//     {
//         name: 'Maria',
//         username: 'MM',
//         email: 'm@m.com',
//         password: bcrypt.hashSync('maria', salt),
//         picture: ''
//     },

// ]

// User.create(users)
//     .then(allUsers => {
//         console.log(`${allUsers} created`)
//         mongoose.connection.close()        
//     })
//     .catch(err => console.log(`Ha ocurrido un error: ${err}`))


// const places = [
//     {
//         name: 'Bajoelvolcán',
//         genre: 'Variado',
//         rating: '4,7',
//         location: {
//             type: 'Point',
//             coordinates: [40.409881,-3.701069]
//         }
//     },
//     {
//         name: 'Escridiscos',
//         genre: 'Variado',
//         rating: '4,5',
//         location: {
//             type: 'Point',
//             coordinates: [40.419239, -3.706482]
//         }
//     },
//     {
//         name: 'Discos La Metralleta',
//         genre: 'Variado',
//         rating: '4,4',
//         location: {
//             type: 'Point',
//             coordinates: [40.418691, -3.706559]
//         }
//     },
//     {
//         name: 'La Gramola',
//         genre: 'Variado',
//         rating: '4,3',
//         location: {
//             type: 'Point',
//             coordinates: [40.419082, -3.706094]
//         }
//     },
//     {
//         name: 'Cuervo Store',
//         genre: '',
//         rating: '4,3',
//         location: {
//             type: 'Point',
//             coordinates: [40.426784,-3.703212]
//         }
//     },
//     {
//         name: 'Jazzymás.com',
//         genre: 'Variados',
//         rating: '44,7',
//         location: {
//             type: 'Point',
//             coordinates: [40.426323, -3.704350]
//         }
//     }
// ]

// Place.create(places)
//     .then(allPlaces => {
//         console.log(`${allPlaces} created`)
//         mongoose.connection.close()        
//     })
//     .catch(err => console.log(`Ha ocurrido un error: ${err}`))


const products = [
    {
        title: 'Queen Live At Wembley 86',
        artist: 'Queen',
        genre: 'Rock',
        price: '80',
        picture: '/images/album-covers/queen-live-at-wembley-86.jpg',
        description: 'Artículo con señales de uso y marcas exteriores',
        condition: 'Usado',
        location: {
            type: 'Point',
            coordinates: [40.425158, -3.698136]
        }
    }, {
        title: 'Abba',
        artist: 'Abba',
        genre: 'Pop',
        price: '15',
        picture: '/images/album-covers/abba.jpeg',
        description: 'Greatest Abba album of all time',
        condition: 'Buen Estado',
        location: {
            type: 'Point',
            coordinates: [40.493000, - 3.965941]
        }
    }, {
        title: 'Ballroom Stories',
        artist: 'Waldeck',
        genre: 'Trip-hop',
        price: '30',
        picture: '/images/album-covers/ballroomstorieswaldeck.jpg',
        description: 'Great combination of beats and jazz',
        condition: 'Usado',
        location: {
            type: 'Point',
            coordinates: [40.471136, - 3.869075]
        }
    }, {
        title: 'Beatles VI',
        artist: 'Beatles',
        genre: 'Pop',
        price: '55',
        picture: '/images/album-covers/beatlesvi.jpeg',
        description: 'Nice hits from the best band on the planet, little scratches on the vinyl',
        condition: 'Usado',
        location: {
            type: 'Point',
            coordinates: [40.435971, -3.706684]
        }
    }, {
        title: 'Greatest hits',
        artist: 'Bobby Vinton',
        genre: 'Pop',
        price: '10',
        picture: '/images/album-covers/Bobby Vinton.jpg',
        description: 'Classic, sealed',
        condition: 'Nuevo',
        location: {
            type: 'Point',
            coordinates: [40.435971, -3.706694]
        }
    }, {
        title: 'Electro-shock Blues',
        artist: 'Eels',
        genre: 'Alternative',
        price: '55',
        picture: '/images/album-covers/electroshockblues.jpg',
        description: "Melancholic and deep songs from Mr. E's most personal work, first edition",
        condition: 'Perfecto Estado',
        location: {
            type: 'Point',
            coordinates: [40.435979, -3.706684]
        }
    }
]

Product.create(products)
    .then(allProducts => {
        console.log(`${allProducts} created`)
        mongoose.connection.close()        
    })
    .catch(error => console.log(`Ha ocurrido un error: ${error}`))

    