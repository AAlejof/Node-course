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

const { MongoClient, ObjectId } = require("mongodb");


// Replace the uri string with your MongoDB deployment's connection string.
const uri = "mongodb://127.0.0.1:27017";

// Create a new client and connect to MongoDB
const client = new MongoClient(uri);

// --------InsertOne------
// async function run() {
//     try {
//         // Connect to the "insertDB" database and access its "haiku" collection
//         const database = client.db("task-manager");
//         const users = database.collection("users");

//         // Create a document to insert
//         const userData =
//             {
//                 name: "Gouda",
//                 age: 0,
//             }

//         const result = await users.insertOne(userData);

//         // Print the ID of the inserted document
//         console.log(result);
//         console.log(`A new user was inserted with the _id: ${result.insertedId}`);
//     } finally {
//         // Close the MongoDB client connection
//         await client.close();
//     }
// }
// // Run the function and handle any errors
// run().catch(console.dir);

// -----InsertMany------
// async function run() {
//     try {
//         // Connect to the "insertDB" database and access its "haiku" collection
//         const database = client.db("task-manager");
//         const users = database.collection("users");

//         // Create a document to insert
//         const userData = [
//             {
//                 name: "Nati",
//                 age: 31,
//             },
//             {
//                 name: "Celine",
//                 age: 28,
//             },
//             {
//                 name: "Neko",
//                 age: 2,
//             }
//         ]

//         const result = await users.insertMany(userData);

//         // Print the ID of the inserted document
//         console.log(result);
//         console.log(`A new user was inserted with the _id: ${result.insertedIds}`);
//     } finally {
//         // Close the MongoDB client connection
//         await client.close();
//     }
// }
// // Run the function and handle any errors
// run().catch(console.dir);

//--------InsertMany TASKS-------
// async function run() {
//     try {
//         // Connect to the "insertDB" database and access its "haiku" collection
//         const database = client.db("task-manager");
//         const tasks = database.collection("tasks");

//         // Create a document to insert
//         const taskData = [
//             {
//                 description: "Clean",
//                 completed: true,
//             },
//             {
//                 description: "Sleep",
//                 completed: false,
//             },
//             {
//                 description: "Eat",
//                 completed: true,
//             }
//         ]

//         const result = await tasks.insertMany(taskData);

//         // Print the ID of the inserted document
//         console.log(result);
//         //console.log(`the next tasks were inserted with the _ids: ${result.insertedIds}`);
//     } finally {
//         // Close the MongoDB client connection
//         await client.close();
//     }
// }
// // Run the function and handle any errors
// run().catch(console.dir);


// //---------FindOne-------
// async function run() {
//     try {

//       // Get the database and collection on which to run the operation
//       const database = client.db("task-manager");
//       const users = database.collection("users");
//       // Query for a movie that has the title 'The Room'
//       const query = { name: "Alejo" };
//       const options = {
//         // Sort matched documents in descending order by rating
//         sort: { "name": -1 },

//         projection: { _id: 0, name: 1},
//       };
//       // Execute query
//       const user = await users.findOne(query, options);
//       // Print the document returned by findOne()
//       console.log(user);
//     } finally {
//       await client.close();
//     }
//   }
//   run().catch(console.dir);

//---------Find-------
// async function run() {
//     try {

//         // Get the database and collection on which to run the operation
//         const database = client.db("task-manager");
//         const users = database.collection("users");

//         const user = await users.find({}).toArray((error, users) => {
//         });

//         const count = await users.countDocuments({});
//         console.log(user);
//         console.log(count);

//     } finally {
//         await client.close();
//     }
// }
// run().catch(console.dir);


// //-----FindOne by Id and Find not completed tasks--------
// async function run() {
//     try {
//         // Get the database and collection on which to run the operation
//         const database = client.db("task-manager");
//         const tasks = database.collection("tasks");

//         // Find the last document inserted by sorting based on the _id field in descending order
//         const lastInsertedDocument = await tasks.findOne({}, { sort: { _id: -1 } });

//         // Find not completed tasks
//         const notCompleted = await tasks.find({ completed: false }).toArray();

//         if (lastInsertedDocument && notCompleted) {
//             console.log("Last Inserted Document:", lastInsertedDocument);
//             console.log("The not completed tasks are:", notCompleted[0].description);
//         } else {
//             console.log("No documents found.");
//         }

//     } finally {
//         await client.close();
//     }
// }

// run().catch(console.dir);

// //------------updateOne users---------
// async function run() {
//     try {
//         const database = client.db("task-manager");
//         const users = database.collection("users");
//         // Create a filter for users with the title "Alejo"
//         const filter = { name: "Facu" };
//         /* Set the upsert option to insert a document if no documents match
//         the filter */
//         const options = { upsert: true };
//         // Specify the update to set a value for the age field
//         const updateDoc = {
//             $set: {
//                 name: "Facu",
//                 age: 36,
//                 potato: false
//             },
//         };
//         // Update the first document that matches the filter
//         const result = await users.updateOne(filter, updateDoc, options);

//         // Print the number of matching and modified documents
//         console.log(
//             `Users: ${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
//         );
//     } finally {
//         // Close the connection after the operation completes
//         await client.close();
//     }
// }
// // Run the program and print any thrown errors
// run().catch(console.dir);

//------------updateMany tasks---------
async function run() {
    try {
        const database = client.db("task-manager");
        const users = database.collection("tasks");
        // Create a filter for users with the title "Alejo"
        const filter = { completed: false };

        // Specify the update to set a value for the age field
        const updateDoc = {
            $set: {
                completed: true
            },
        };
        // Update the first document that matches the filter
        const result = await users.updateMany(filter, updateDoc);

        // Print the number of matching and modified documents
        console.log(
            `Tasks: ${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
        );
    } finally {
        // Close the connection after the operation completes
        await client.close();
    }
}
// Run the program and print any thrown errors
run().catch(console.dir);

