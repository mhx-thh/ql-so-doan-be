const express = require("express");
const router = express.Router();

const FacultyController = require('../controller/faculty');

// lấy danh sách
// tạo khoa
// sửa khoa
// xóa khoa

router.get('/', FacultyController.getAllFaculty);
router.get('/:id', FacultyController.getOneFacultyById);
router.post('/', FacultyController.createFaculty);
router.put('/:id', FacultyController.updateFacultyById);
router.delete('/:id', FacultyController.deleteFacultyById);

module.exports = router;
