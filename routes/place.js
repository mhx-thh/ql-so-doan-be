const express = require('express');
const router = express.Router();

const PlaceController = require('../controller/place');

//get all places 
router.get('', PlaceController.getAll);
//get place by id (req.body)
router.get('/get', PlaceController.getPlace);
//add place
router.post('/create', PlaceController.createPlace);
//update place by id (req.body)
router.put('/update', PlaceController.updatePlace);
//delete place by id (req.body)
router.delete('/delete', PlaceController.deletePlace);

module.exports = router;