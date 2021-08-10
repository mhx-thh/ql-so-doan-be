const mongoose = require('mongoose');

const receiptSchema = mongoose.Schema({
    SID: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Data: {
        type: Buffer,
        required: true
    }
});

module.exports = mongoose.model('Receipt', receiptSchema);