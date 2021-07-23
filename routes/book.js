const express = require("express");
const router = express.Router();

const BookController = require('../controller/book');

router.post('/addBook/', BookController.createBook);

module.exports = router;
