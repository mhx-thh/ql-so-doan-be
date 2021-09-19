const express = require("express");
const router = express.Router();

const facultyController = require('../controller/faculty');

// lấy danh sách
// tạo khoa
// sửa khoa
// xóa khoa

router.get('', facultyController.getListNameFaculties);
router.post('/', facultyController.addfaculty);
router.put('/:id', facultyController.updatefaculty);
router.delete('/:id', facultyController.deletefaculty);

module.exports = router;
