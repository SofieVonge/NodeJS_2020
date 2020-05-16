"use strict";
const nodemailer = require("nodemailer");

async function main() {
    let account = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: account.user, 
          pass: account.pass
        }
    });

    let email = await transporter.sendMail({
        from: "sofievonge@gmail.com",
        to: "sofi469s@stud.kea.dk",
        subject: "Test email",
        text: "I'm sending an email from another of my emails, but it will never be real sent because I'm using a fake Ethereal account"
    });

    console.log("Follow the link and see how the email would look like", nodemailer.getTestMessageUrl(email));
}

main().catch(console.error);