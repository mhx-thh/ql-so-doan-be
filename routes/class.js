const express = require("express");
const router = express.Router();

const ClassController = require('../controller/class');

router.get('/getClass/:facultyName', ClassController.getClassByNameOfFaculty);
router.get('/getAll', ClassController.getAllClass);
router.post('/createClass', ClassController.createClass);
router.put('/updateClass/:id', ClassController.updateClassById);
router.delete('/delete/:id', ClassController.deleteClassById);

module.exports = router;
