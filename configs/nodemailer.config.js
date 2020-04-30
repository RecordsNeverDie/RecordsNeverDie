
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'recordsneverdie@gmail.com',
        pass: 'Proyecto.2'
    }
})

module.exports = transporter