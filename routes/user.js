const express = require("express");
const router = express.Router();

const UserController = require('../controller/user');

router.post('/signup', UserController.createUser);

router.post('/login', UserController.userLogin);

router.post('/updateCustomer', UserController.updateCustomer);

router.post('/checkExistUser', UserController.checkExistUser);

module.exports = router;
