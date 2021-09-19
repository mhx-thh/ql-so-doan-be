const express = require("express");
const router = express.Router();
const notificationController = require('../controller/notification');

router.get('/', notificationController.getAllNotification);
router.get('/:id', notificationController.getOneNotificationById);
router.post('/create', notificationController.createNotification);
router.put('/update/:id', notificationController.updateNotificationById);
router.delete('/delete/:id', notificationController.deleteNotificationById);

module.exports = router;
