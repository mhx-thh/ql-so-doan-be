const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const facultySchema = mongoose.Schema({
  NameShort: {
    type: String, 
    required: true,
    unique: true,
  },
  NameFull: { 
    type: String, 
    required: true,
  }
},{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

// vitural full class
facultySchema.virtual('classes', {
  ref: 'Class',
  foreignField: 'Faculty',
  localField: '_id',
});

facultySchema.plugin(uniqueValidator);

// facultySchema.pre(/^find/, function (next) {
//   this.populate({
//     path: 'classes',
//     select: "_id Name"
//   });
//   next();
// });

module.exports = mongoose.model('Faculty', facultySchema);
