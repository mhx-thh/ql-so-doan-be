const ClassModel = require('../models/class');
const handler = require('../utils/handlerFactory');

exports.getAllClass = handler.getAll(ClassModel);
exports.createClass = handler.createOne(ClassModel);
exports.updateClassById = handler.updateOne(ClassModel);
exports.deleteClassById = handler.deleteOne(ClassModel);