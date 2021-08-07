const Book = require("../models/book");
const ApprovedBooks = require("../models/approved_books");
const handler = require('../utils/handlerFactory');
const sendResponse = require('../utils/sendResponse');
const sendMailController = require('./sendMail');
const StatusCodes = require('http-status-codes');
const AppError = require('../utils/appError');
//Tìm hết sỗ đoàn
exports.getAllBook = handler.getAll(Book);
//Tìm theo ObjectID
exports.getBook = handler.getOne(Book);
//Tìm theo MSSV
exports.getBookById = async (req, res, next) => {
    await Book.findOne({ SID: req.body.SID })
        .then(result => {
            sendResponse(result, StatusCodes.OK, res);
        })
        .catch(err => {
            return next(new AppError('No document found!', StatusCodes.NOT_FOUND));
        })
};
//Tạo sổ đoàn
exports.createBook = handler.createOne(Book);
//Cập nhật theo ObjectID
exports.updateBook = handler.updateOne(Book);
//Cập nhật theo MSSV
exports.updateBookById = async (req, res, next) => {
    let book = await Book.findOne({ SID: req.body.SID });
    if (book) {
        await Book.updateOne({ _id: book._id }, req.body, {
            new: true,
            runValidators: true
        });
        await book.save();
        return sendResponse(book, StatusCodes.OK, res);
    } else {
        return next(new AppError('No document found!', StatusCodes.NOT_FOUND));
    };
};
//Xóa theo ObjectID
exports.deleteBook = handler.deleteOne(Book);
//Xóa theo MSSV
exports.deleteBookById = async (req, res, next) => {
    const book = await Book.findOne({ SID: req.body.SID });
    if (book) {
        await Book.deleteOne({ _id: book._id });
        return sendResponse('success', StatusCodes.NO_CONTENT, res);
    } else {
        return next(new AppError('No document found!', StatusCodes.NOT_FOUND));
    }
};
//Chuyển trạng thái duyệt sang đã duyệt
exports.approvalBook = async (req, res, next) => {
    const book = await Book.findByIdAndUpdate({ _id: req.query.id }, { $set: { Approval: 'Đã duyệt' } });
    if (!book) { return next(new AppError('No document found!', StatusCodes.NOT_FOUND)); };
    book.save();
    return sendMailController.sendMail(req, res);
};
//Chuyển trạng thái duyệt sang đã duyệt bằng MSSV
exports.approvalBookById = async (req, res, next) => {
    const book = await Book.findOneAndUpdate({ SID: req.body.SID }, { $set: { Approval: 'Đã duyệt' } });
    if (!book) { return next(new AppError('No document found!', StatusCodes.NOT_FOUND)); };
    book.save();
    return sendMailController.sendMail(req, res);
};
//Tìm trạng thái đã duyệt theo ObjectID
exports.getApproval = async (req, res, next) => {
    const book = await Book.findById({ _id: req.query.id });
    if (!book) { return next(new AppError('No document found!', StatusCodes.NOT_FOUND)); };
    return sendResponse(book.Approval, StatusCodes.OK, res);
};
//Tìm trạng thái đã duyệt theo MSSV
exports.getApprovalById = async (req, res, next) => {
    const book = await Book.findOne({ SID: req.body.SID });
    if (!book) { return next(new AppError('No document found!', StatusCodes.NOT_FOUND)); };
    return sendResponse(book.Approval, StatusCodes.OK, res);
};
//Tình trạng duyệt theo khoa
exports.ApprovedByFaculty = async (req, res, next) => {
    const approvedBooks = await Book.find({ Faculty: req.query.Faculty, Approval: 'Đã duyệt' })
    const PendingBooks = await Book.find({ Faculty: req.query.Faculty, Approval: 'Đang chờ duyệt' })
    res.status(200).json({
        Approved: approvedBooks.length,
        Pending: PendingBooks.length
    });
};
//Đã duyệt của khoa theo năm
exports.ApprovedByYear = async (req, res, next) => {
    const approvedBook = await ApprovedBooks.find({ Year: req.query.Year });
    let book = [];
    for (let i = 0; i < approvedBook.length; i++) {
        book[i] = await Book.find({ Faculty: req.query.Faculty, SID: approvedBook[i].SID });
    }
    res.status(200).json(
        { Approved: book.length }
    );
};