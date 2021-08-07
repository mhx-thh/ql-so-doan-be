const express = require("express");
const router = express.Router();

const facultyController = require('../controller/faculty');

router.post('/addfaculty', facultyController.addfaculty);
router.get('/listNamefaculty', facultyController.getListNameFaculties);
router.put('/updatefaculty/:id', facultyController.updatefaculty);
router.delete('/deletefaculty/:id', facultyController.deletefaculty);

module.exports = router;
