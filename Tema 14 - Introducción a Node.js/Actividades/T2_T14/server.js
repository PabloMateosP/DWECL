import express from 'express';
import path from 'path';
import { MongoClient } from 'mongodb';

const app = express();
const router = express.Router();
const __dirname = path.resolve();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.use(express.json());
router.post('/datos', async function (req, res) {
    const registro = {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos
    };

    const result = await run(registro);
    res.json(result);

});

async function run(registro) {
    const uri = "mongodb+srv://****************@clusterges.hdpy8ep.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('test');
        const collec = database.collection('persona');

        if (registro.nombre !== "") {
            // Si el nombre no ha sido introducido anteriormente se añade
            try {
                const result = await collec.insertOne(registro);

                // Leémos los datos con los nuevos registros
                const lectura = await collec.find().toArray();
                console.log(lectura)
                return lectura;

            } catch (error) {
                console.error(error);
            }
        } else {
            // Leémos los datos sin agregar nada nuevo
            const lectura = await collec.find().toArray();
            return lectura;
        }

    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
        console.log("Funciona correctamente");
    }
}

app.use('/', router);
app.listen(3000, () => {
    console.log('Listening on port 3000');
});