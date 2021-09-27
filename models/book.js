const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    //MSSV
    SID: {
        type: String,
        required: true,
        unique: true,
    },
    //Tên
    Name: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    },
    //Ngày sinh
    DOB: {
        type: Date,
        required: true,
        default: null
    },
    Email: {
        type: String,
        required: true
    },
    // Chi đoàn
    Class: {
        type: mongoose.Schema.ObjectId,
        ref: 'Class',
    },

    // Nghị quyết số
    NumberApproved: {
        required: true,
        type: Number,
    },

    //SDT
    Phone: {
        type: String,
        require: true
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

    //Duyệt
    Approval: {
        type: Boolean,
        default: false,
    },
    // Vị trí lưu sổ
    Place: {
        type: mongoose.Schema.ObjectId,
        ref: 'Place',
        default: null,
    }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

// vitural full class
bookSchema.virtual('requests', {
    ref: 'Request',
    foreignField: 'Book',
    localField: '_id',
    options: { sort: { updatedAt: -1 } }
  });
bookSchema.virtual('histories', {
    ref: 'History',
    foreignField: 'Book',
    localField: '_id',
    options: { sort: { Time: -1 } }
});

bookSchema.pre(/^find/, function (next) {
    this.populate({
      path: 'Class',
      select: "_id Name"
    })
    .populate({
        path: 'Place',
        select: "_id ShortHand"
      });
    next();
  });

module.exports = mongoose.model('Book', bookSchema);
