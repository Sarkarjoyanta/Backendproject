const nodemailer = require("nodemailer");

async function emailVerification(email, subject, templete){
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: "scqqenyjmiktucmu",
        },
      });
    

      let info = await transporter.sendMail({
        from: 'Backend', 
        to: email, 
        subject: subject, 
        html: templete,
      });
}

module.exports = emailVerification;