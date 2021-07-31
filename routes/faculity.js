const express = require("express");
const router = express.Router();

const FaculityController = require('../controller/faculity');

router.post('/addFaculity', FaculityController.addFaculity);
router.get('/listNameFaculity', FaculityController.getListNameFaculities);
router.put('/updateFaculity/:id', FaculityController.updateFaculity);
router.delete('/deleteFaculity/:id', FaculityController.deleteFaculity);

module.exports = router;
