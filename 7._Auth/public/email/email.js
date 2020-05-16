

$("#send").click(() => {

    const to = $("#to").val();
    const from = $("#from").val();
    const subject = $("#subject").val();
    const message = $("#message").val();

    main(to, from, subject, message);

});


"use strict";
const nodemailer = require("nodemailer");

async function main(to, from, subject, message) {
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
        from: from,
        to: to,
        subject: subject,
        text: message
    });

    const link = nodemailer.getTestMessageUrl(email);
    $("#link").val(link);

    console.log("Follow the link and see how the email would look like", nodemailer.getTestMessageUrl(email));
}