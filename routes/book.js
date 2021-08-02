const express = require("express");
const router = express.Router();

const BookController = require('../controller/book');

router.get('/getAll/', BookController.getAllBook);
router.get('/getBook/', BookController.getBook);
router.get('/getApproval/', BookController.getApproval);
router.post('/addBook/', BookController.createBook);
router.put('/update/:id', BookController.updateBook); //add param
router.delete('/deleteBook/:id', BookController.deleteBook); //add param
router.put('/approvalBook', BookController.approvalBook);
router.get('/ApprovedByFaculty', BookController.ApprovedByFaculty);
router.get('/ApprovedByYear', BookController.ApprovedByYear);

module.exports = router;
