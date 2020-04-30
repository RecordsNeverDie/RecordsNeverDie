require('dotenv').config()
const mongoose = require('mongoose')
const User = require('../models/user.model')
const Place = require('../models/place.model')
const Product = require('../models/product.model')
const dbName = 'Records-never-die'

mongoose.connect(`${process.env.DB}`, { useNewUrlParser: true, useUnifiedTopology: true })
const bcrypt = require('bcrypt')
const bcryptSalt = 10
const salt = bcrypt.genSaltSync(bcryptSalt)


const users = [
    {
        name: 'Patricia',
        username: 'Patylla',
        email: 'p@p.com',
        password: bcrypt.hashSync('patricia', salt),
        picture: ''
    },
    {
        name: 'Ruben',
        username: 'Rub',
        email: 'r@r.com',
        password: bcrypt.hashSync('ruben', salt),
        picture: ''
    },
    {
        name: 'Jose',
        username: 'JJ',
        email: 'j@j.com',
        password: bcrypt.hashSync('jose', salt),
        picture: ''
    },
    {
        name: 'Maria',
        username: 'MM',
        email: 'm@m.com',
        password: bcrypt.hashSync('maria', salt),
        picture: ''
    },

]

User.create(users)
    .then(allUsers => {
        console.log(`${allUsers} created`)
    })
    .catch(err => console.log(`Ha ocurrido un error: ${err}`))


const places = [
    {
        name: 'Bajoelvolcán',
        genre: 'Variado',
        rating: '4,7',
        location: {
            type: 'Point',
            coordinates: [40.409881, -3.701069]
        },
        description: "Es una tienda de discos situada en el centro de Madrid, en el barrio de Lavapiés, especializados en vinilos tanto nuevos como usados, lps y singles de todo tipo de estilos y épocas: Soul, Funk, Jazz, Rock'n'roll, Beat, Garage, Psicodelia, Folk, Progresivo, Heavy, Punk, Hip-hop, Indie etc.. También contamos con una sección de librería especializada en música, cine y narrativa actual."
    },
    {
        name: 'Escridiscos',
        genre: 'Variado',
        rating: '4,5',
        location: {
            type: 'Point',
            coordinates: [40.419239, -3.706482]
        },
        description: 'Tienda de discos, además de punto de venta de entradas de conciertos, libros, camisetas, chapas, etc, etc.'
    },
    {
        name: 'Discos La Metralleta',
        genre: 'Variado',
        rating: '4,4',
        location: {
            type: 'Point',
            coordinates: [40.418691, -3.706559]
        },
        description: 'Ofrecen la posibilidad de vender / cambiar tus discos de vinilo, CDs, DVDs y Blue-Ray de segunda mano que ya no usas siempre con la mejor tasación. Tanto en nuestras tiendas físicas como en la web de lametralleta.es puedes encontrar: artículos de colección, descatolizaciones, rarezas, cosas curiosas, ofertas de cualquier estilo...'
    },
    {
        name: 'La Gramola',
        genre: 'Variado',
        rating: '4,3',
        location: {
            type: 'Point',
            coordinates: [40.419082, -3.706094]
        },
        description: 'El paraíso de los discos perdidos, merece la pena perder un poco de tiempo en buscar y encontrar joyas a buen precio'
    },
    {
        name: 'Cuervo Store',
        genre: '',
        rating: '4,3',
        location: {
            type: 'Point',
            coordinates: [40.426784, -3.703212]
        },
        description: 'Un sitio para la mejor música y la mejor ropa, y también para todo aquello que nos guste; libros, complementos, exposiciones, conciertos en directo y cualquier tipo de cosa que encaje con el espíritu.'
    },
    {
        name: 'Jazzymás.com',
        genre: 'Variados',
        rating: '4,7',
        location: {
            type: 'Point',
            coordinates: [40.426323, -3.704350]
        },
        description: 'Ofrecen a sus clientes toda la información existente sobre cualquier tipo de música, escuchas en la tienda, charlas y poder adquirir la música en todos los formatos posibles, cds, vinilos, dvds, blu-ray, libros y partituras. '
    }
]

Place.create(places)
    .then(allPlaces => {
        console.log(`${allPlaces} created`)
    })
    .catch(error => console.log(`Ha ocurrido un error: ${err}`))

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
            coordinates: [40.493000, -3.965941]
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
            coordinates: [40.471136, -3.869075]
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
            coordinates: [40.435971, -3.506684]
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
            coordinates: [40.435979, -3.706300]
        }
    }
]

Product.create(products)
    .then(allProducts => {
        console.log(`${allProducts} created`)
    })
    .catch(error => console.log(`Ha ocurrido un error: ${error}`))

