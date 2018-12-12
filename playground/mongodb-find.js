// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, client) => {
  if (err) {
    return console.log('unable to connect');
  }
  console.log('connected to server');
  const db = client.db('TodoApp')

  // db.collection('Todos').find({_id: new ObjectID('5c11519b6f8e8fb87d15c460')}).toArray().then((doc) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(doc, undefined, 2));
  // }, err => {
  //   console.log('Unable to fetch', err);
  // })

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos Count: ${count}`);
  }, err => {
    console.log('Unable to fetch', err);
  })

  client.close()
});
