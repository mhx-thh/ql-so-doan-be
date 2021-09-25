const FacultyModel = require('../models/faculty');
const handler = require('../utils/handlerFactory');

exports.getAllFaculty = handler.getAll(FacultyModel);
exports.getOneFacultyById = handler.getOne(FacultyModel, {populate: 'classes'});
exports.createFaculty = handler.createOne(FacultyModel);
exports.updateFacultyById = handler.updateOne(FacultyModel);
exports.deleteFacultyById = handler.deleteOne(FacultyModel);