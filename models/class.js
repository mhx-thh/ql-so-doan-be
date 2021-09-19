const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const classSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
    unique: true,
  },
  Faculty: { 
    type: mongoose.Schema.ObjectId,
    ref: 'Facuty',
    required: [true, 'Class must belong to an Facuty'],
  }
});

classSchema.plugin(uniqueValidator);

classSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'Faculty',
  });
  next();
});

module.exports = mongoose.model('Class', classSchema);
