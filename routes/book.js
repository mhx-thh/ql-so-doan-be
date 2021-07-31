const express = require("express");
const router = express.Router();

const BookController = require('../controller/book');
const SendMailController = require('../controller/sendMail')

router.get('/getAll/', BookController.getAllBook);
router.get('/getBook/', BookController.getBook);
router.get('/getApproval/', BookController.getApproval);
router.post('/addBook/', BookController.createBook);
router.put('/update/:id', BookController.updateBook); //add param
router.delete('/deleteBook/:id', BookController.deleteBook); //add param
router.put('/approvalBook', BookController.approvalBook);

module.exports = router;
