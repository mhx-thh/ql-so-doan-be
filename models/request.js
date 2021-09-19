const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    Book: {
        type: mongoose.Schema.ObjectId,
        ref: 'Book',
        required: [true, 'Request must belong to an Book'],
    },
    // Loại
    Type: {
        type: String,
        enum: ["profile", "rut_so_doan", "chuyen_chi_doan"],
        required: true,
    },
    Title: {
        type: String,
        required: true,
    },
    Content: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Request', requestSchema);
