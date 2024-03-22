const nodemailer = require("nodemailer")
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, 
    auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWORD,
    },
});

const mailtOptions = {
    from: {
        name: 'Teste Guilherme',
        address: process.env.EMAIL,
    }, //sender
    to: ["guilhemregbt04@gmail.com"],
    subject: "Send email from GMAIL SMTP", //assunto
    text: "Send email from GMAIL SMTP",  //corpo do email com texto
    html: "<b>Olá<b>", //corpo html
};
// funcao para enviar email
const sendMail = async (transporter , mailOptions) => {
    try{
        await transporter.sendMail(mailOptions);
        console.log('Email has been sent')
    }catch(error){
        console.log(error);
    }
};

sendMail(transporter, mailOptions);