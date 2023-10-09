
require('dotenv').config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.email,
        pass: process.env.pass,
    }
})

function createSendmail(subject, text) {

    const mailOptions = {
        from: "vsokolvak2000@gmail.com",
        to: "sergijlunev@ukr.net",
        subject: subject,
        text: text
    }

    transporter.sendMail(mailOptions)
    return('лист відправлено')
}

export const sendMail = (subject, text) => createSendmail(subject, text)


