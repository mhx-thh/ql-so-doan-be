const express = require("express");
const router = express.Router();
const historyController = require('../controller/history');

router.get('', historyController.getAll);
router.get('/:id', historyController.getHistoryById);
router.post('/create', historyController.createHistory);
router.put('/update/:id', historyController.saveHistory);
router.delete('/delete/:id', historyController.deleteHistoryById);

module.exports = router;