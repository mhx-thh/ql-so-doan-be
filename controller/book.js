const Book = require("../models/book");
const handler = require('../utils/handlerFactory');
const axios = require('axios');

exports.getAllBook = handler.getAll(Book, {populate: 'requests histories'});
exports.getOneBookBySId = handler.getOne(Book, { query: 'SID', populate: 'requests histories' })
exports.getOneBook = handler.getOne(Book);
exports.createBook = handler.createOne(Book);
exports.updateBook = handler.updateOne(Book);
exports.deleteBook = handler.deleteOne(Book);

exports.recaptcha = (req, res, next) => {
    if (!req.body.captcha) {
        res.status(404).json({ 'message': 'Captcha token is undefined!' });
    }
    const postData = `secret=${process.env.RECAPTCHASECRETKEY}&response=${req.body.captcha}`
    axios
        .post('https://www.google.com/recaptcha/api/siteverify', postData)
        .then(response => {
            //console.log(`statusCode: ${res.status}`)
            //console.log(response.data);
            if(response.data.score >= 0.4)
                return res.json(response.data);
            else
                return res.json({ 'message': 'You might be a bot!'})
        })
        .catch(error => {
            //console.error(error)
        })
}
