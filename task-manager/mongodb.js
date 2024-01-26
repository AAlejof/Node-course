const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {}, ( error, client ) => {
    if (error) {
        return console.log('Unable to connect to database!');
    } 
    console.log('Connected correctly!');
    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: 'Alejo',
        age: 35
    })

})

// const { MongoClient, ServerApiVersion } = require("mongodb");

// // Replace the placeholder with your Atlas connection string
// const uri = "mongodb://127.0.0.1:27017";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri,  {
//         serverApi: {
//             version: ServerApiVersion.v1,
//             strict: true,
//             deprecationErrors: true,
//         }
//     }
// );

// async function run() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();

//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     db.collection('users').insertOne({
//         name: 'Alejo',
//         age: 35
//     })
//   } catch(error) {
//     // Ensures that the client will close when you finish/error
//     console.log('Cannot conect to database');
//   }
// }
// run().catch(console.dir);
