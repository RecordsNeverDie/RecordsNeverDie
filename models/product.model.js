const mongoose = require("mongoose")
const Schema = mongoose.Schema

const productSchema = new Schema({
    title: String,
    artist: String,
    genre: String,
    price: Number,
    picture: String,
    description: String,
    condition: {
        type: String,
        enum: ['Nuevo', 'Perfecto Estado', 'Buen Estado', 'Usado']
    },
    location: {
        type: 
        { type: String
        },
        coordinates: [Number]
        }
}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product