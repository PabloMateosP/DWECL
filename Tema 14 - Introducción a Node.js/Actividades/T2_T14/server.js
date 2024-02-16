import express from 'express';
import path from 'path';
import { MongoClient } from 'mongodb';

const app = express();
const router = express.Router();
const __dirname = path.resolve();


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/getData', async function (req, res) {
    const documents = await run();
    res.json(documents);
});

router.post('/submit', async function (req, res) {
    const registro = {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos
    };

    await run(registro);
});

async function run(registro) {
    const uri = "mongodb+srv://pmatpal0105:pablo@clusterges.hdpy8ep.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('test');
        const collec = database.collection('persona');

        if (registro.nombre != "") {
            await collec.insertOne(registro);
        } else {
            
        }
        
    } finally {
        await client.close();
    }
}

app.use('/', router);
app.listen(3000);
console.log('Listening on port 3000');