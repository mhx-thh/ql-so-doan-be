const FacultyModel = require('../models/faculty');
const handler = require('../utils/handlerFactory');

exports.getAllFaculty = handler.getAll(FacultyModel);
exports.getOneFacultyById = handler.getOne(FacultyModel);
exports.createFaculty = handler.createOne(FacultyModel);
exports.updateFacultyById = hander.updateOne(FacultyModel);
exports.deleteFacultyById = hander.deleteOne(FacultyModel);