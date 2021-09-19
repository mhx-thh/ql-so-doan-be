const express = require("express");
const router = express.Router();

const School_Years = require('../controller/school_years');

// lấy danh sách
// tạo Năm học
// sửa Năm học
// xóa Năm học

router.get('', School_Years.getAll);
router.get('/:id', School_Years.getOne);
router.post('/', School_Years.create);
router.put('/:id', School_Years.update);
router.delete('/:id', School_Years.delete);

module.exports = router;
