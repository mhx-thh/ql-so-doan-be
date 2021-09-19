const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    notification: String,
});

module.exports = mongoose.model('notification', notificationSchema);
