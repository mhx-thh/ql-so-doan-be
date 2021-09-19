const express = require("express");
const router = express.Router();

const ClassController = require('../controller/class');

// lấy danh sách
// tạo lớp
// sửa lớp
// xóa lớp

router.get('', ClassController.getAllClass);
router.post('/', ClassController.createClass);
router.put('/:id', ClassController.updateClassById);
router.delete('/:id', ClassController.deleteClassById);

module.exports = router;
