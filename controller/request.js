const RequestModel = require('../models/request');
const handler = require('../utils/handlerFactory');

exports.getAllRequest = handler.getAll(RequestModel, {populate: 'Book'});
exports.getOneRequestById = handler.getOne(RequestModel, {populate: 'Book'});
exports.createRequest = handler.createOne(RequestModel);
exports.updateRequestById = handler.updateOne(RequestModel);
exports.deleteRequestById = handler.deleteOne(RequestModel);
