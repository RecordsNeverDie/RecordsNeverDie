const mongoose = require("mongoose")
const Schema = mongoose.Schema

const placeSchema = new Schema({
    name: String,
    genre: String,
    rating: String,
    description: String,
    creator: {type: Schema.Types.ObjectId, ref: 'User'},
    location: {
        type: 
        { type: String
        },
        coordinates: [Number]
        }
}, {
    timestamps: true
})

placeSchema.index({ location: '2dsphere' }); 
const Place = mongoose.model("Place", placeSchema)

module.exports = Place