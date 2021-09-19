const express = require('express');
const router = express.Router();

const PlaceController = require('../controller/place');

// lấy danh sách
// tạo Vị trí
// sửa Vị trí
// xóa Vị trí

router.get('/', PlaceController.getAllPlace);
router.post('/', PlaceController.createPlace);
router.put('/:id', PlaceController.updatePlaceById);
router.delete('/:id', PlaceController.deletePlaceById);

module.exports = router;