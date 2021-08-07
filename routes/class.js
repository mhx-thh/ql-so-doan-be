const express = require("express");
const router = express.Router();

const ClassController = require('../controller/class');

router.get('/:facultyName', ClassController.getClassByNameOfFaculty);
router.get('', ClassController.getAllClass);
router.post('/create', ClassController.createClass);
router.put('/update/:id', ClassController.updateClassById);
router.delete('/delete/:id', ClassController.deleteClassById);

module.exports = router;
