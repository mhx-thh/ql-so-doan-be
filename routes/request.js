const express = require('express');
const router = express.Router();

const RequestController = require('../controller/request');

// lấy danh sách
// tạo Yêu cầu
// sửa Yêu cầu
// xóa Yêu cầu

router.get('', RequestController.getAll);
router.get('/:id', RequestController.getPlace);
router.post('/', RequestController.createRequest);
router.put('/:id', RequestController.updateRequestById);
router.delete('/:id', RequestController.deleteRequestById);

module.exports = router;