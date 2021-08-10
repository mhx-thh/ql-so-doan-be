const express = require("express");
const router = express.Router();
const ReceiptController = require('../controller/receipt');

router.get('', ReceiptController.getAll);
router.get('/:id', ReceiptController.getOne);
router.post('/:id', ReceiptController.createOne);
router.delete('/:id', ReceiptController.deleteOne);

module.exports = router;