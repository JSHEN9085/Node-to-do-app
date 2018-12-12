const mongoose = require('mongoose')

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true //remove extra space in the string
  }
});

module.exports = {User}
