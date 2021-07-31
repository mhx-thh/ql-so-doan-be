const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    //MSSV
    SID: {
        type: String,
        required: true
    },
    //Tên
    Name: {
        type: String,
        required: true
    },
    //Ngày sinh
    DOB: {
        type: Date,
        default: "2000-1-1",
        required: true
    },
    //Chi đoàn
    YB: {
        type: String,
        required: true
    },
    //Khoa
    Faculity: {
        type: String,
        required: true
    },
    //SDT
    Phone: {
        type: String,
        require: true,
        maxlength: 10,
        minlength: 10
    },
    //CMND
    IC: {
        type: String,
        required: true
    },
    //Ngày vào đoàn
    DJU: {
        type: Date,
        default: null
    },
    //Ngày vào đảng
    DJCP: {
        type: Date,
        default: null
    },
    //Chức vụ đoàn cấp 3
    PositionHSU: {
        type: String,
        default: null
    },
    //Chức vụ trong lớp
    ClassOfficePosition: {
        type: String,
        default: null
    },
    //Năng khiếu
    Talent: {
        type: String,
        default: null
    },
    //Trạng thái
    Status: {
        type: String
    },
    //Duyệt
    Approval: {
        type: String,
        default: 'Đang chờ duyệt'
    }
});

module.exports = mongoose.model('Book', bookSchema);
