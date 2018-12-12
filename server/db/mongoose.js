// cd to mongo in flatiron folder
// cd to bin folder
// run ./mongod --dbpath ~/mongo-data
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/TodoApp';

mongoose.Promise = global.Promise;
mongoose.connect(url);

module.exports = {mongoose}
