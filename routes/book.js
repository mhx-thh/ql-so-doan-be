const express = require("express");
const router = express.Router();

const BookController = require('../controller/book');
const SendMailController = require('../controller/sendMail')

router.get('/getBook/', BookController.getBook);
router.post('/addBook/', BookController.createBook);
router.put('/update', BookController.updateBook);
router.delete('/deleteBook', BookController.deleteBook);
router.put('/approvalBook', BookController.approvalBook);

module.exports = router;
