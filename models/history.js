const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    // Sổ đoàn
    Book: {
        type: mongoose.Schema.ObjectId,
        ref: 'Book',
        required: [true, 'History must belong to an Book'],
    },
    // Mã chi đoàn chuyển
    Class: {
        type: mongoose.Schema.ObjectId,
        ref: 'Class',
        required: [true, 'History must belong to an Class'],
    },
    //Nội dung chuyển sổ đoàn
    Content: {
        type: String,
        required: true
    },
    //Thời gian sửa chữa lần cuối
    Time: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

module.exports = mongoose.model('History', historySchema);
