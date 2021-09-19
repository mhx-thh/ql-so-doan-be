const NotificationModel = require('../models/notification');
const handler = require('../utils/handlerFactory');

exports.getAllNotification = handler.getAll(NotificationModel);
exports.getOneNotificationById = handler.getOne(NotificationModel);
exports.createNotification = handler.createOne(NotificationModel);
exports.updateNotificationById = handler.updateOne(NotificationModel);
exports.deleteNotificationById = handler.deleteOne(NotificationModel);
