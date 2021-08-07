const express = require("express");
const router = express.Router();

const ApprovedBooks = require('../controller/approved_books');

router.get('', ApprovedBooks.getAll);
router.get('/get', ApprovedBooks.getOne);
router.post('/add', ApprovedBooks.create);
router.put('/update', ApprovedBooks.update);
router.delete('/delete', ApprovedBooks.delete);

module.exports = router;
