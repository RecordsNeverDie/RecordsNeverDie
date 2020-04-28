const mongoose = require("mongoose")
const Schema = mongoose.Schema

const placeSchema = new Schema({
    name: String,
    genre: String,
    rating: String,
    description: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    location: {
        type: 
        { type: String
        },
        coordinates: [Number]
        }
}, {
    timestamps: true
})

const Place = mongoose.model("Place", placeSchema)

module.exports = Place