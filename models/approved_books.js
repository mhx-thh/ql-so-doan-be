const mongoose = require('mongoose');

const ApprovedSchema = mongoose.Schema({
    SID: {
        type: String,
        required: true,
        unique: true
    },
    Approval: {
        type: String,
        default: 'Đã duyệt'
    },
    Year: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Approved_Books', ApprovedSchema);