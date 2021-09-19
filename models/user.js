const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  typeAccount: { 
    type: String,
    enum: ['user', 'admin'],
    required: true, 
    default: 'user' 
  },
  name: { 
    type: String, 
    required: true 
  }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
