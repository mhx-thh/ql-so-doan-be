const express = require("express");
const router = express.Router();

const School_Years = require('../controller/school_years');

router.get('/getAll', School_Years.getAll);
router.post('/add', School_Years.create);
router.put('/update', School_Years.update);
router.delete('/delete', School_Years.delete);

module.exports = router;
