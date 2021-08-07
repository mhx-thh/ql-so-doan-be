const ApprovedBooks = require('../models/approved_books');
const handler = require('../utils/handlerFactory');

exports.getAll = handler.getAll(ApprovedBooks);

exports.getOne = handler.getOne(ApprovedBooks);

exports.create = handler.createOne(ApprovedBooks);

exports.update = handler.updateOne(ApprovedBooks);

exports.delete = handler.deleteOne(ApprovedBooks);