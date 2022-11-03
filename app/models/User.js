const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    
  },
  age: Number,
  
}
);

const User = mongoose.model('User', userSchema);

module.exports = User;