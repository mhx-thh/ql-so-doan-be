const express = require('express');
const router = express.Router();

const PlaceController = require('../controller/place');

router.post('/add', PlaceController.createPlace);
router.put('/update', PlaceController.updatePlace);
router.delete('/delete', PlaceController.deletePlace);

module.exports = router;