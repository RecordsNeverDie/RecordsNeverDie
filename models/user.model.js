const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    picture: String,
    description: String
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User