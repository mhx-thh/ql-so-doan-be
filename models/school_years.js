const mongoose = require('mongoose');

const SchoolYearSchema = new mongoose.Schema({
    Year: { 
        type: String, 
        required: true,
        unique: true,
    }
});

module.exports = mongoose.model('SchoolYear', SchoolYearSchema);
