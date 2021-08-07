const express = require("express");
const router = express.Router();

const School_Years = require('../controller/school_years');

router.get('', School_Years.getAll);
router.get('/:id', School_Years.getOne);
router.post('/create', School_Years.create);
router.put('/update/:id', School_Years.update);
router.delete('/delete/:id', School_Years.delete);

module.exports = router;
