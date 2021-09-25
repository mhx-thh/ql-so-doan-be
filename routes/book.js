const express = require("express");
const router = express.Router();

const BookController = require('../controller/book');
const { paging } = require('../controller/middleCtrl'); 

// lấy danh sách sổ đoàn
// tạo sổ đoàn
// sửa sổ đoàn
// gửi biên nhận
// xóa sổ đoàn

router.get('/:SID', BookController.getOneBookBySId);
router.get('/', paging, BookController.getAllBook);
router.post('/', BookController.createBook);
router.put('/:id', BookController.updateBook);
router.delete('/:id', BookController.deleteBook);

// capcha

module.exports = router;
