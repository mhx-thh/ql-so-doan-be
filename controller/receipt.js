const Receipt = require('../models/receipt');
const handler = require('../utils/handlerFactory');
const sendResponse = require('../utils/sendResponse');
const StatusCodes = require('http-status-codes');
const AppError = require('../utils/appError');
const handlebars = require('handlebars');
const fs = require('fs');
const pdf = require('html-pdf');
const Book = require("../models/book");

exports.getAll = handler.getAll(Receipt);

exports.getOne = (req, res, next) => {
    Receipt.findOne({ SID: req.params.id })
        .then(result => {
            return sendResponse(result, StatusCodes.OK, res);
        })
        .catch(err => {
            return new AppError('No document found!', 404);
        });
};

exports.createOne = async (req, res, next) => {

    const readHTMLFile = function (Model, path, callback) {
        fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
            if (err) {
                throw err;
                callback(err);
            }
            else {
                callback(null, html);
            }
        });
    };

    const book = await Book.findOne({ SID: req.params.id })
    if (!book) return next(new AppError('No document found!', 404));
    const email = book.Email;
    Receipt.findOne({ SID: req.params.id })
        .then(result => {
            if (result) {
                return sendResponse('Đã tồn tại!', 400, res);
            }
        })
        .catch(err => {
            return res.status(404).json('Error');
        })
    const number = await Receipt.countDocuments({}).exec() + 1;
    await readHTMLFile(book, process.env.LINK_HTML, function (err, html) {
        const date = new Date();
        const template = handlebars.compile(html);
        const replacements = {
            number: number,
            name: book.Name,
            id: book.SID,
            faculty: book.Faculty,
            months: `9, 10, 11, 12/${date.getFullYear()}`,
            day: date.getDate(),
            month: date.getMonth() + 1,
            year: date.getFullYear(),
        }
        const html_replaced = template(replacements);
        const pdf_options = {
            format: 'A4',
            orientation: 'portrait',
        };

        pdf.create(html_replaced, pdf_options).toBuffer((err, buffer) => {
            if (err) return next(AppError('Can not create PDF', 400, err));
            Receipt.create({
                SID: req.params.id,
                Email: email,
                Data: buffer
            });
            return sendResponse('Created', StatusCodes.CREATED, res);
        })
    })
};

exports.createOneNoReturnResponse = async (req, res, next) => {
    const book = await Book.findOne({ SID: req.params.id })
    if (!book) return next(new AppError('No document found!', 404));
    const email = book.Email;
    const number = await Receipt.countDocuments({}).exec() + 1;
    const data = fs.readFileSync(process.env.LINK_HTML, { encoding: 'utf-8' });
    const date = new Date();
    const template = handlebars.compile(data);
    const replacements = {
        number: number,
        name: book.Name,
        id: book.SID,
        faculty: book.Faculty,
        months: `9, 10, 11, 12/${date.getFullYear()}`,
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
    }
    const html_replaced = template(replacements);
    const pdf_options = {
        format: 'A4',
        orientation: 'portrait',
    };
    const isItDoneYet = new Promise((resolve, reject) => {
        pdf.create(html_replaced, pdf_options).toBuffer(async (err, buffer) => {
            if (err) return reject('Can not create PDF');
            const x = new Receipt({
                SID: req.params.id,
                Email: email,
                Data: buffer
            });
            await x.save();
            resolve(x);
        })
    })
    await isItDoneYet;
}

exports.deleteOne = (req, res, next) => {
    Receipt.findOneAndDelete({ SID: req.params.id })
        .then(result => {
            return sendResponse(result, StatusCodes.NO_CONTENT, res);
        })
        .catch(err => {
            return next(new AppError('No document found!', StatusCodes.NOT_FOUND));
        });
};