const HistoryModel = require('../models/history');
const handler = require('../utils/handlerFactory');

exports.getAllHistory = handler.getAll(HistoryModel);
exports.getOneHistoryById = handler.getOne(HistoryModel);
exports.createHistory = handler.createOne(HistoryModel);
exports.updateHistoryById = handler.updateOne(HistoryModel);
exports.deleteHistoryById = handler.deleteOne(HistoryModel);
