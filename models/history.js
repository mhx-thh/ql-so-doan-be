const mongoose = require('mongoose');

const historyShema = mongoose.Schema({
    //MSSV
    SID: { type: String, required: true },
    //Mã địa điểm
    PlaceID: { type: String, required: true },
    //Thời gian sửa chữa lần cuối
    Time: { type: Date, required: true }
});

module.exports = mongoose.model('History', historySchema);