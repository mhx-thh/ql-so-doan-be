const express = require("express");
const router = express.Router();

const sendMailController = require('../controller/sendMail');

router.post('/:id', sendMailController.sendMail);

module.exports = router;
