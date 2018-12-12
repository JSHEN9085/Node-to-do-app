const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/TodoApp';

mongoose.Promise = global.Promise;
mongoose.connect(url);

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true //remove extra space in the string
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// let anotherTodo = new Todo({
//   text: "Cook Dinner",
//   completed: false,
//   completedAt: new Date()
// });
//
// anotherTodo.save().then((doc) => {
//   console.log('Save Todo', doc);
// }, e => {
//   console.log("unable to save", e);
// });

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true //remove extra space in the string
  }
});

let newUser = new User({
  email: 'jshen9085@gmail.com'
})

newUser.save().then(doc => {
  console.log('Save User', doc);
}, e => {
  console.log('Unable to save');
})
