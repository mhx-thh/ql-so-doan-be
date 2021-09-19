const express = require("express");
const router = express.Router();

const BookController = require('../controller/book');

// lấy danh sách sổ đoàn
// tạo sổ đoàn
// sửa sổ đoàn
// gửi biên nhận
// xóa sổ đoàn

router.get('', BookController.getAllBook);
router.post('/', BookController.createBook);
router.put('/:id', BookController.updateBookById);
router.delete('/:id', BookController.deleteBookById);

// capcha

module.exports = router;
