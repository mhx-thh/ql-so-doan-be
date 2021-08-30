const express = require("express");
const router = express.Router();

const BookController = require('../controller/book');

//get all books
router.get('', BookController.getAllBook);
router.get('/approval', BookController.getBookApproval);
//danh sách sổ chưa được duyệt
router.get('/notApproval', BookController.getBookNotApproval);
//get one book by student ID
router.get('/:id', BookController.getBookById);
//get approval by student ID
router.get('/approval/:id', BookController.getApprovalById);
//add one book to database - used
router.post('/create', BookController.createBook);
//update book (student ID)
router.put('/update/:id', BookController.updateBookById);
//delete book (student ID)
router.delete('/delete/:id', BookController.deleteBookById);
//change approval (student ID) -used
router.put('/approval/:id', BookController.approvalBookById);
//get approved by faculty
router.get('/approval/faculty', BookController.ApprovedByFaculty);
//get approved by faculty in year
router.get('/approval/year', BookController.ApprovedByYear);
//Hủy đoàn viên
router.put('/:id', BookController.RemoveYouth);
//captcha
router.post('/verify', BookController.recaptcha);
module.exports = router;
