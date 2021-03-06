const express = require("express");
const router = express.Router();

const School_Years = require('../controller/school_years');

// lấy danh sách
// tạo Năm học
// sửa Năm học
// xóa Năm học

router.get('/', School_Years.getAllSchoolYear);
router.get('/:id', School_Years.getOneSchoolYearById);
router.post('/', School_Years.createSchoolYear);
router.put('/:id', School_Years.updateSchoolYearById);
router.delete('/:id', School_Years.deleteSchoolYearById);

module.exports = router;
