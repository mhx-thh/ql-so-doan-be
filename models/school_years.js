const mongoose = require('mongoose');

const SchoolYearSchema = mongoose.Schema({
    Year: { 
        type: String, 
        required: true 
    }
});

module.exports = mongoose.model('SchoolYear', SchoolYearSchema);