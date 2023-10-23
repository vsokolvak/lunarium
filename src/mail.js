
require('dotenv').config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.email,
        pass: process.env.pass,
    }
})

function createSendmail() {

    const mailOptions = {
        from: "vsokolvak2000@gmail.com",
        to: "vsokolvak2000@gmail.com",
        subject: 'subject',
        text: 'text',
        html: '<h1>Замовлення</h1>' +
            '<div>sdsada</div>'
    }

    transporter.sendMail(mailOptions)
    console.log('відсилаю')
    console.log(process.env.email)
    console.log(process.env.pass)
    return('лист відправлено')
}

createSendmail()