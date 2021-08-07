const express = require('express');
const router = express.Router();

const PlaceController = require('../controller/place');

//get all places 
router.get('', PlaceController.getAll);
//get place by id (req.body)
router.get('/:id', PlaceController.getPlace);
//add place
router.post('/create', PlaceController.createPlace);
//update place by id (req.body)
router.put('/update/:id', PlaceController.updatePlace);
//delete place by id (req.body)
router.delete('/delete/:id', PlaceController.deletePlace);

module.exports = router;