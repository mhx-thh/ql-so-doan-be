const express = require("express");
const router = express.Router();
const historyController = require('../controller/history');

router.get('', historyController.getHistoryById);
router.post('/create', historyController.createHistory);
router.put('/update/:id', historyController.updateHistoryById);
router.delete('/delete/:id', historyController.deleteHistoryById);

module.exports = router;