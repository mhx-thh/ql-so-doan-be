const express = require('express');
const router = express.Router();

const PlaceController = require('../controller/place');

//get all places 
router.get('', PlaceController.getAll);
//get place by id 
router.get('/:id', PlaceController.getPlace);
//add place
router.post('/create', PlaceController.createPlace);
//update place by id 
router.put('/update/:id', PlaceController.updatePlace);
//delete place by id 
router.delete('/delete/:id', PlaceController.deletePlace);

module.exports = router;