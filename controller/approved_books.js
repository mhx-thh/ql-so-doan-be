const ApprovedBooks = require('../models/approved_books');
// const StatusCodes = require('http-status-codes');
// const sendResponse = require('../utils/sendResponse');
const handler = require('../utils/handlerFactory');
// const AppError = require('../utils/appError');

exports.getAll = handler.getAll(ApprovedBooks);

exports.getOne = handler.getOne(ApprovedBooks);

exports.create = handler.createOne(ApprovedBooks);

exports.update = handler.updateOne(ApprovedBooks);

exports.delete = handler.deleteOne(ApprovedBooks);