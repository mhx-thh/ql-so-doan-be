const ClassModel = require('../models/class');
const handler = require('../utils/handlerFactory');

exports.getAllClass = handler.getAll(ClassModel);
exports.createClass = handler.createOne(ClassModel);
exports.updateClassById = hander.updateOne(ClassModel);
exports.deleteClassById = hander.deleteOne(ClassModel);