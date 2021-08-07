const express = require("express");
const router = express.Router();

const ApprovedBooks = require('../controller/approved_books');

router.get('', ApprovedBooks.getAll);
router.get('/:id', ApprovedBooks.getOne);
router.post('/create', ApprovedBooks.create);
router.put('/update/:id', ApprovedBooks.update);
router.delete('/delete/:id', ApprovedBooks.delete);

module.exports = router;
