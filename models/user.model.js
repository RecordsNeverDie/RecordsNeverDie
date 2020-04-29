const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    picture: String,
    description: String,
    vinyls: [{type: Schema.Types.ObjectId, ref: 'Product'}],
    store: [{type: Schema.Types.ObjectId, ref: 'Place'}]
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User