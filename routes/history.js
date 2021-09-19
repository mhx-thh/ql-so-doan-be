const express = require("express");
const router = express.Router();

const historyController = require('../controller/history');

// lấy danh sách
// tạo lịch sử
// sửa lịch sử
// xóa lịch sử

router.get('', historyController.getAll);
router.get('/:id', historyController.getHistoryById);
router.post('/', historyController.createHistory);
router.put('/:id', historyController.saveHistory);
router.delete('/:id', historyController.deleteHistoryById);

module.exports = router;