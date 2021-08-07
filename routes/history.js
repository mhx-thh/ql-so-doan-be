const express = require("express");
const router = express.Router();
const historyController = require('../controller/history');

router.get('', historyController.getAll);
router.get('/:id', historyController.get);
router.post('/add', historyController.create);
router.put('/update', historyController.update);
router.delete('/delete', historyController.delete);

module.exports = router;