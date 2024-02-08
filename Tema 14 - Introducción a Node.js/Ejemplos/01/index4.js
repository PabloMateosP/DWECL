// leeHtml.js
import { createServer } from 'http';
import * as fs from 'fs';
createServer(function (req, res) {
    fs.readFile('demo1.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });

    fs.writeFile('prueba1.txt', 'Contenido....', function (err) {
        if (err) throw err;
        console.log('Creado!');
    });

    fs.appendFile('prueba1.txt', '\n más contenido....', function (err) {
        if (err) throw err;
        console.log('Añadido!');
    });
    
    fs.unlink('prueba1.txt', function (err) {
        if (err) throw err;
        console.log('Archivo borrado!');
    })
    
}).listen(8080)