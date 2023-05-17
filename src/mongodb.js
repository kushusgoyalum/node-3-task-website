//CRUD create, read, update and delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

// const connectionURL = 'mongodb://localhost:27017/'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//  if(error){
//     return console.log('unable to connevt with database')
//  }
//  console.log ('connected successfully')
//  const db = client.db(databaseName)
//  db.collection('Users').insertOne({
//     name:'kush',
//     age: 25
//  })
// })

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017/'
const databaseName = 'task-manager'
const id = new ObjectId()
console.log (id.id)
console.log (id)
console.log (id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)
db.collection('tasks').deleteOne(
   {
      description: 'clean the house'
   }
).then((result) => {
   console.log(result)
}).catch((error)=>{
   console.log(error)
})
})
//     db.collection('tasks').insertMany({
//         _id: id,
//         description: 'clean the house',
//         completed: true
//     } ,
//     (error,result) => {
//          if(error){
//             return console.log ('unable to insert tasks')
//          }
//          console.log(result.ops)
//     })}
// })
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });

// const mongoose = require("mongoose");
// const collections = require("./test")
// mongoose.Promise = global.Promise;

// const db = {};
// db.mongoose = mongoose;
// db.url = 'mongodb://localhost:27017/test';
// db.mongoose
//     .connect(db.url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => {
//         console.log("Connected to the database!");
//     })
//     .catch(err => {
//         console.log("Cannot connect to the database!", err);
//         process.exit();
//     });
//     const addItem = async (name, type) => {
//       const collectionItem = new collections({
//           collectionName: name,
//           type: type
//       })
  
//       const saveItem = await collectionItem.save();
//       if (!saveItem) {
//           console.log("save fail!", saveItem);
//           return null; // save fail
//       }
//       return saveItem;
//   }
//   const retVal = addItem('yogesh','male')
//   if (!retVal) {
//    console.log ('not added')
//   }
//   console.log ('added')

 
//     MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//  if(error){
//     return console.log('unable to connevt with database')
//  }
//  console.log ('connected successfully')
//  const db = client.db(databaseName)
//  db.collection('Users').insertOne({
//     name:'kush',
//     age: 25
//  })
// })