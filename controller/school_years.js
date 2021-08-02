const School_Years = require('../models/school_years');
// const StatusCodes = require('http-status-codes');
// const sendResponse = require('../utils/sendResponse');
const handler = require('../utils/handlerFactory');
// const AppError = require('../utils/appError');

exports.getAll = handler.getAll(School_Years);

exports.getOne = handler.getOne(School_Years);

exports.create = handler.createOne(School_Years);

exports.update = handler.updateOne(School_Years);

exports.delete = handler.deleteOne(School_Years);