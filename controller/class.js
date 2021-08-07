const classes = require('../models/class');
const faculites = require('../models/faculty');
const handler = require('../utils/handlerFactory');
const sendResponse = require('../utils/sendResponse');
const AppError = require('../utils/appError');

exports.getClassByNameOfFaculty = async (req, res, next) => {

  let faculty = await faculites.findOne({ name: req.params.id });
  if (!faculty) {
    return res.status(500).json({
      message: "Getting class by name of faculty failed!"
    })
  }
  classes.find({ faculty: faculty.id })
    .then((documents) => {
      res.status(200).json(documents);
    })
    .catch(error => {
      res.status(500).json({
        message: "Getting class by name of faculty failed!"
      })
    })
}

exports.getAllClass = handler.getAll(classes);

exports.updateClassById = async (req, res, next) => {
  await classes.findOneAndUpdate({ id: req.params.id }, req.body)
    .then(result => {
      sendResponse(result, 200, res);
    })
    .catch(err => {
      sendResponse(err, 404, res);
    });
};

exports.deleteClassById = async (req, res, next) => {
  await classes.findOneAndDelete({ id: req.params.id })
    .then(result => {
      sendResponse(result, 204, res);
    })
    .catch(err => {
      sendResponse(err, 404, res);
    });
};

exports.createClass = async (req, res, next) => {
  const faculty = await faculites.findOne({ id: req.body.faculty })
  if (!faculty) { return next(new AppError('No faculty found!', 404)); }
  await classes.create(req.body)
    .then(result => {
      sendResponse(result, 201, res);
    })
    .catch(err => {
      return next(new AppError(err, 400));
    });
};