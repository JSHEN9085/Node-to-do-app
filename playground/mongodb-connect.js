// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, client) => {
  if (err) {
    return console.log('unable to connect');
  }
  console.log('connected to server');
  const db = client.db('TodoApp')

  db.collection('Todos').insertOne({ //insertOne is used to crate new object in Mongo
    text: 'Something to do',
    completed: false
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert todo', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  } )

  // db.collection('User').insertOne({
  //   id: 123,
  //   name: 'Jun',
  //   age: 28,
  //   location: 'New York'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // } )

  client.close()
});
