const express = require('express');
const router = express.Router();

const RequestController = require('../controller/request');

// lấy danh sách
// tạo Yêu cầu
// sửa Yêu cầu
// xóa Yêu cầu

router.get('', RequestController.getAll);
router.get('/:id', RequestController.getPlace);
router.post('/', RequestController.createPlace);
router.put('/:id', RequestController.updatePlace);
router.delete('/:id', RequestController.deletePlace);

module.exports = router;