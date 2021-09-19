const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
    //Mã địa điểm
    id: {
        type: String,
        required: true,
        unique: true
    },
    //Tên địa điểm
    Name: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Place', placeSchema);
