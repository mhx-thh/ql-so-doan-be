const express = require("express");
const router = express.Router();

const facultyController = require('../controller/faculty');

router.get('', facultyController.getListNameFaculties);
router.get('/:id', facultyController.getFaculty);
router.post('/create', facultyController.addfaculty);
router.put('/update/:id', facultyController.updatefaculty);
router.delete('/delete/:id', facultyController.deletefaculty);

module.exports = router;
