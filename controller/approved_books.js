const ApprovedBooks = require('../models/approved_books');
const handler = require('../utils/handlerFactory');

exports.getAll = handler.getAll(ApprovedBooks);

exports.getOne = async (req, res, next) => {
    await ApprovedBooks.findOne({ SID: req.params.id })
        .then(result => {
            sendResponse(result, StatusCodes.OK, res);
        })
        .catch(err => {
            return next(new AppError('No document found!', StatusCodes.NOT_FOUND));
        })
};

exports.create = handler.createOne(ApprovedBooks);

exports.update = async (req, res, next) => {
    const book = await ApprovedBooks.findOneAndUpdate({ SID: req.params.id }, req.body, {
        new: true,
        runValidators: true
    });
    if (!book) { return next(new AppError('No document found!', StatusCodes.NOT_FOUND)); };
    return sendResponse(book, StatusCodes.OK, res);
};

exports.delete = async (req, res, next) => {
    const book = await Book.findOne({ SID: req.params.id });
    if (book) {
        await Book.deleteOne({ _id: book._id });
        return sendResponse('success', StatusCodes.NO_CONTENT, res);
    } else {
        return next(new AppError('No document found!', StatusCodes.NOT_FOUND));
    }
};