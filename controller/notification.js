const notification = require('../models/notification');
const handler = require('../utils/handlerFactory');

exports.getAll = handler.getAll(notification);

exports.get = handler.getOne(notification);

exports.create = handler.createOne(notification);

exports.update = handler.updateOne(notification);

exports.delete = handler.deleteOne(notification);