const sgMail = require('@sendgrid/mail')
const sendgridAPIkey = "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"

sgMail.setApiKey(sendgridAPIkey)

const msg = {
  to: 'sazwerling@gmail.com', // Change to your recipient
  from: 'sazwerling@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })