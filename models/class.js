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
    ref: 'Faculty',
    required: [true, 'Class must belong to an Facuty'],
  }
});

classSchema.plugin(uniqueValidator);

classSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'Faculty',
    select: "_id NameShort NameFull"
  });
  next();
});

module.exports = mongoose.model('Class', classSchema);
