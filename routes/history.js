const express = require("express");
const router = express.Router();

const historyController = require('../controller/history');

// lấy danh sách
// tạo lịch sử
// sửa lịch sử
// xóa lịch sử

router.get('', historyController.getAllHistory);
router.get('/:id', historyController.getOneHistoryById);
router.post('/', historyController.createHistory);
router.put('/:id', historyController.updateHistoryById);
router.delete('/:id', historyController.deleteHistoryById);

module.exports = router;