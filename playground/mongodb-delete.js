// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, client) => {
  if (err) {
    return console.log('unable to connect');
  }
  console.log('connected to server');
  const db = client.db('TodoApp')

  //delete all object that meet the requirement
  db.collection('Todos').deleteMany({completed: true}).then(result => {
    console.log(result);
  })

  //delete one
  db.collection('User').deleteOne({name: 'Jun'}).then(result => {
    console.log(result);
  })

  //find the one and delete
  db.collection('User').findOneAndDelete({id: 123}).then(result => {
    console.log(result);
  })

  // client.close()
});
