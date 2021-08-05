const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
    notification: String,
});

module.exports = mongoose.model('notification', notificationSchema);