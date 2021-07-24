const StatusCodes = require('http-status-codes');
const sendResponse = require('../utils/sendResponse');
const AppError = require('./appError');

exports.getOne = (Model) => async (req, res, next) => {
    const document = await Model.findById(req.params.id);
    if (!document) { return next(new AppError('No document found!', StatusCodes.NOT_FOUND)); };
    return sendResponse(document, StatusCodes.OK, res);
}

exports.createOne = (Model) => async (req, res, next) => {
    const document = await Model.create(req.body);
    sendResponse(document, StatusCodes.CREATED, res);
};

exports.updateOne = (Model) => async (req, res, next) => {
    const updateOption = {
        new: true,
        runValidators: true
    };
    const document = await Model.findByIdAndUpdate(req.params.id, req.body, updateOption);
    if (!document) { return next(new AppError('No document found!', StatusCodes.NOT_FOUND)); };
    return sendResponse(document, StatusCodes.OK, res);
};

exports.deleteOne = (Model) => async (req, res, next) => {
    const document = await Model.findByIdAndDelete(req.params.id);
    if (!document) { return next(new AppError('No document found!', StatusCodes.NOT_FOUND)); };
    return sendResponse(document, StatusCodes.NO_CONTENT, res);
};