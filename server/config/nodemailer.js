import nodemailer from 'nodemailer'

// const transporter = nodemailer.createTransport({
//     host: 'smtp-relay.brevo.com',
//     port: 587,
//     auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//     }
// });

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  
});

// const transporter = nodemailer.createTransport({
//   host: "smtp-relay.brevo.com",
//   port: 465,
//   secure: true,
//   auth: { user: process.env.SENDER_EMAIL, 
//     pass: process.env.SENDER_PASS },
//   connectionTimeout: 10000, // 10s before giving up
//   greetingTimeout: 5000,    // 5s for server greeting
//   socketTimeout: 10000      // 10s max inactivity
// });


export default transporter;