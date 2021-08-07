const express = require("express");
const router = express.Router();
const notificationController = require('../controller/notification');

router.get('', notificationController.getAll);
router.get('/:id', notificationController.get);
router.post('/create', notificationController.create);
router.put('/update/:id', notificationController.update);
router.delete('/delete/:id', notificationController.delete);

module.exports = router;