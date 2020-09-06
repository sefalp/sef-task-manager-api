const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeMail = (name,email) =>
    sgMail.send({
    to: email,
    from: 'alps@mef.edu.tr',
    subject: 'Merhabalar',
    text: ` Sitemize hosgeldiniz sayın ${name}. `
})


module.exports = sendWelcomeMail