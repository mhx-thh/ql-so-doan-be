const express = require('express');
const router = express.Router();

const PlaceController = require('../controller/place');

// lấy danh sách
// tạo Vị trí
// sửa Vị trí
// xóa Vị trí

router.get('', PlaceController.getAll);
router.get('/:id', PlaceController.getPlace);
router.post('/', PlaceController.createPlace);
router.put('/:id', PlaceController.updatePlace);
router.delete('/:id', PlaceController.deletePlace);

module.exports = router;