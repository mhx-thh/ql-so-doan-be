const express = require("express");
const router = express.Router();
const notificationController = require('../controller/notification');

router.get('', notificationController.getAll);
router.get('/:id', notificationController.get);
router.post('/add', notificationController.create);
router.put('/update', notificationController.update);
router.delete('/delete', notificationController.delete);

module.exports = router;