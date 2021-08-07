const express = require("express");
const router = express.Router();

const BookController = require('../controller/book');

//get all books
router.get('', BookController.getAllBook);
//get one book by student ID
router.get('/:id', BookController.getBookById);
//get approval by student ID
router.get('/approval/:id', BookController.getApprovalById);
//add one book to database
router.post('/create/', BookController.createBook);
//update book (student ID)
router.put('/update/:id', BookController.updateBookById);
//delete book (student ID)
router.delete('/delete/:id', BookController.deleteBookById);
//change approval (student ID)
router.put('/approval/update/:id', BookController.approvalBookById);
//get approved by faculty
router.get('/ApprovedByFaculty', BookController.ApprovedByFaculty);
//get approved by faculty in year
router.get('/ApprovedByYear', BookController.ApprovedByYear);

module.exports = router;
