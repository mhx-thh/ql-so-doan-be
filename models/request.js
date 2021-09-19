const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    //Mã
    id: {
        type: String,
        required: true,
        unique: true
    },
    // Loại
    type: {
        type: String,
        enum: ["profile", "rut_so_doan", "chuyen_chi_doan"],
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Request', requestSchema);
