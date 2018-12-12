// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, client) => {
  if (err) {
    return console.log('unable to connect');
  }
  console.log('connected to server');
  const db = client.db('TodoApp')

//findOneAndUpdate take 3 arguments and all are object
  // db.collection('Todos').findOneAndUpdate(
  //   {_id: new ObjectID("5c116090386ddcbda41ffc89")}, //filter first and find the target object
  //   {$set: {completed: false} }, //what we want to update, must user $set to change data
  //   {returnOriginal: false} //don't return the original
  // ).then(result => {console.log(result)})

  db.collection('User').findOneAndUpdate(
    {_id: new ObjectID("5c115a3d84b8ccbbc9585734")},
    {$set: {name: 'Sam'}, $inc:{age: 1} }, //$inc is increase 1
    {returnOriginal: false} 
  ).then(result => {console.log(result)})

  client.close()
});
