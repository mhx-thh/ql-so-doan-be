const express = require("express");
const router = express.Router();

const BookController = require('../controller/book');

//get all books
router.get('/getAll/', BookController.getAllBook);
//get one book by ObjectID
router.get('/getBook/', BookController.getBook);
//get one book by student ID
router.get('/getBookById/', BookController.getBookById);
//get approval by ObjectID
router.get('/getApproval/', BookController.getApproval);
//get approval by student ID
router.get('/getApprovalById', BookController.getApprovalById);
//add one book to database
router.post('/addBook/', BookController.createBook);
//update book (ObjectID)
router.put('/update/:id', BookController.updateBook);
//update book (student ID)
router.put('/updateBookById', BookController.updateBookById);
//delete book (ObjectID)
router.delete('/deleteBook/:id', BookController.deleteBook);
//delete book (student ID)
router.delete('/deleteBookById', BookController.deleteBookById);
//change approval (Object ID)
router.put('/approvalBook', BookController.approvalBook);
//change approval (student ID)
router.put('/approvalBookById', BookController.approvalBookById);
//get approved by faculty
router.get('/ApprovedByFaculty', BookController.ApprovedByFaculty);
//get approved by faculty in year
router.get('/ApprovedByYear', BookController.ApprovedByYear);

module.exports = router;
