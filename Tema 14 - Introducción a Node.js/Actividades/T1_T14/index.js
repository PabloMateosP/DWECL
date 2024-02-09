import express from 'express';
import path from 'path';
const app = express();
const router = express.Router();
var __dirname = path.resolve(); //Resuelve y adapta para módulos ES6

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/pagAjax', function (req, res) {
    res.json({ NOMBRE: 'Pablo', APELLIDO: 'Mateos' });
});


app.use('/', router);
app.listen(3000);
console.log('Escuchando en puerto 3000');