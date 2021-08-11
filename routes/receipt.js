const express = require("express");
const router = express.Router();
const ReceiptController = require('../controller/receipt');
// api/receipt
//lấy all
router.get('', ReceiptController.getAll);
//lấy theo MSSV
router.get('/:id', ReceiptController.getOne);
//tạo theo MSSV (search thông tin từ book) 
router.post('/:id', ReceiptController.createOne);
//xóa theo MSSV
router.delete('/:id', ReceiptController.deleteOne);

module.exports = router;