// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// const connectionURL = 'mongodb://127.0.0.1:27017';
// const databaseName = 'task-manager';

// MongoClient.connect(connectionURL, {}, ( error, client ) => {
//     if (error) {
//         return console.log('Unable to connect to database!');
//     } 
//     console.log('Connected correctly!');
//     const db = client.db(databaseName)

//     db.collection('users').insertOne({
//         name: 'Alejo',
//         age: 35
//     })

// })

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

const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1:27017";

// Create a new client and connect to MongoDB
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect to the "insertDB" database and access its "haiku" collection
    const database = client.db("task-manager");
    const users = database.collection("users");
    
    // Create a document to insert
    const user = {
      name: "Alejo",
      age: 35,
    }
    // Insert the defined document into the "haiku" collection
    const result = await users.insertOne(user);

    // Print the ID of the inserted document
    console.log(`A new user was inserted with the _id: ${result.insertedId}`);
  } finally {
     // Close the MongoDB client connection
    await client.close();
  }
}
// Run the function and handle any errors
run().catch(console.dir);

