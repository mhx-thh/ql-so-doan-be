const Book = require("../models/book");
const handler = require('../utils/handlerFactory');
const sendResponse = require('../utils/sendResponse');
const sendMailController = require('./sendMail');
const StatusCodes = require('http-status-codes');
const AppError = require('../utils/appError');
//Tìm hết sỗ đoàn
exports.getAllBook = handler.getAll(Book);
//Tìm theo ObjectID
exports.getBook = handler.getOne(Book);
//Tạo sổ đoàn
exports.createBook = handler.createOne(Book);
//Cập nhật theo ObjectID
exports.updateBook = handler.updateOne(Book);
//Xóa theo ObjectID
exports.deleteBook = handler.deleteOne(Book);
//Chuyển trạng thái duyệt sang đã duyệt
exports.approvalBook = async (req, res, next) => {
    const book = await Book.findByIdAndUpdate({ _id: req.query.id }, { $set: { Approval: 'Đã duyệt' } });
    if (!book) { return next(new AppError('No document found!', StatusCodes.NOT_FOUND)); };
    book.save();
    //TODO: Chưa gửi mail
    //sendMailController.sendMail(req, res, next); 
    return sendResponse(book, StatusCodes.OK, res);
};
//Tìm trạng thái đã duyệt theo ObjectID
exports.getApproval = async (req, res, next) => {
    const book = await Book.findById({ _id: req.query.id });
    if (!book) { return next(new AppError('No document found!', StatusCodes.NOT_FOUND)); };
    return sendResponse(book.Approval, StatusCodes.OK, res);
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
