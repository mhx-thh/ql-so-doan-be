const express = require("express");
const router = express.Router();

const UserController = require('../controller/user');

router.post('/signup', UserController.createUser);
router.post('/login', UserController.userLogin);

router.get('/', UserController.getAllUser);
router.get('/:id', UserController.getOneUserById);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUserById);
router.delete('/:id', UserController.deleteUserById);

module.exports = router;
