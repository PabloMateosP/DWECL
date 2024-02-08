// Envío de EMAIL

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pmatpal0105@g.educaand.es', // Cuenta que se usa para el envío
        pass: ''  // Poner password
    }
});

var mailOptions = {
    from: 'pmatpal0105@g.educaand.es', // Correo remitente
    to: 'dgonrom2803@g.educaand.es', // Correo destino
    subject: 'Enviando correo desde Node.js',
    html: '<h1>Hola desde Node.js</h1>'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Correo enviado: ' + info.response);
    }
});