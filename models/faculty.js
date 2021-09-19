const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const facultySchema = mongoose.Schema({
  id: { 
    type: String, 
    required: true, 
    unique: true 
  },
  name: { 
    type: String, 
    required: true 
  }
});

facultySchema.plugin(uniqueValidator);

module.exports = mongoose.model('faculty', facultySchema);
