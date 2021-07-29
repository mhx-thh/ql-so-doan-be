const Book = require("../models/book");
const handler = require('../utils/handlerFactory');
const sendResponse = require('../utils/sendResponse');
// const sendMailController = require('./sendMail');
const StatusCodes = require('http-status-codes');
const AppError = require('../utils/appError');

exports.getBook = handler.getOne(Book);

exports.createBook = handler.createOne(Book);

exports.updateBook = handler.updateOne(Book);

exports.deleteBook = handler.deleteOne(Book);

exports.approvalBook = async (req, res, next) => {
    const book = await Book.findByIdAndUpdate({ _id: req.query.id }, { $set: { Approval: 'Đã duyệt' } });
    if (!book) { return next(new AppError('No document found!', StatusCodes.NOT_FOUND)); };
    book.save();
    return sendResponse(book, StatusCodes.OK, res);
};

// exports.updateApproval = async (req, res, next) => {
//   let book = await Book.findOne({ SID: req.body.SID });
//   if (book) {
//     await Book.updateOne({ _id: book._id }, {
//       $set: {
//         Approval: req.body.Approval,
//       }
//     });
//     await book.save();
//     return res.status(200).json({ message: "Approval updated!" });
//   } else {
//     return res.status(401).json({ message: "SID not found!" });
//   };
// };

// exports.updateYouthBranch = async (req, res, next) => {
//   let book = await Book.findOne({ SID: req.body.SID });
//   if (book) {
//     await Book.updateOne({ _id: book._id }, {
//       $set: {
//         YB: req.body.YB
//       }
//     });
//     await Book.save();
//     return res.status(200).json({ message: "Youth Branch updated!" })
//   } else {
//     return res.status(401).json({ message: "SID not found!" });
//   }
// };

// exports.deleteBook = async (req, res, next) => {
//   const book = await Book.findOne({ SID: req.body.SID });
//   if (book) {
//     await Book.deleteOne({ _id: book._id });
//     return res.status(200).json({ message: "Book deleted!" });
//   } else {
//     return res.status(401).json({ message: "Book not found!" });
//   }
// };
