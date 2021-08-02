const mongoose = require('mongoose');

const SchoolYearsSchema = mongoose.Schema({
    Year: { type: String, required: true }
});

module.exports = mongoose.model('School_Years', SchoolYearsSchema);