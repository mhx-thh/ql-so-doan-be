const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    // Mã địa điểm
    ShortHand: {
        type: String,
        required: true,
        unique: true
    },
    // Tên địa điểm
    Name: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Place', placeSchema);
