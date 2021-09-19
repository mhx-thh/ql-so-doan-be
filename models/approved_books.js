const mongoose = require('mongoose');

const ApprovedSchema = new mongoose.Schema({
    Book: {
        type: mongoose.Schema.ObjectId,
        ref: 'Book',
        required: [true, 'Approved must belong to an Book'],
    },
    Approval: {
        type: String,
        default: 'Đã duyệt'
    },
    Year: {
        type: mongoose.Schema.ObjectId,
        ref: 'SchoolYear',
        required: [true, 'Approved must belong to an Year'],
    },
    Note: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('Approved_Books', ApprovedSchema);
