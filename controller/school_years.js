const SchoolYearsModel = require('../models/school_years');
const handler = require('../utils/handlerFactory');

exports.getAllSchoolYear = handler.getAll(SchoolYearsModel);
exports.getOneSchoolYearById = handler.getOne(SchoolYearsModel);
exports.createSchoolYear = handler.createOne(SchoolYearsModel);
exports.updateSchoolYearById = handler.updateOne(SchoolYearsModel);
exports.deleteSchoolYearById = handler.deleteOne(SchoolYearsModel);