
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://pmatpal0105:pablo@clusterges.hdpy8ep.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        const database = client.db('test');
        const collec = database.collection('persona');

        const documentos = await collec.find({}).toArray();
        console.log("Documentos en la colección '2DAW':");
        console.log(documentos);

    } finally {
        // Close the database connection when finished or an error occurs
        await client.close();
    }
}
run().catch(console.dir);
