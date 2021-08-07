const faculty = require('../models/faculty');
const handler = require('../utils/handlerFactory');
const sendResponse = require('../utils/sendResponse');
const classes = require('../models/class');
const AppError = require('../utils/appError');


exports.getListNameFaculties = (req, res, next) => {
  faculty.find({}, '-_id __v0 name id', (err, txs) => {
    if (!err) res.status(200).json(txs);
    else
      res.status(500).json({
        message: "Get faculty failed!"
      });
  });
};

exports.getFaculty = async (req, res, next) => {
  faculty.find({ id: req.params.id }, '-_id __v0 name id', (err, result) => {
    if (!err) res.status(200).json(result);
    else
      res.status(404).json({
        message: err.message
      });
  })
};

exports.addfaculty = handler.createOne(faculty);

exports.updatefaculty = async (req, res, next) => {
  await faculty.findOneAndUpdate({ id: req.params.id }, req.body)
    .then(result => {
      sendResponse(result, 200, res);
    })
    .catch(err => {
      sendResponse(err, 404, res);
    })
};

exports.deletefaculty = async (req, res, next) => {

  const faculty = await faculty.findOne({ id: req.params.id });
  if (!faculty) { return next(new AppError('No document found!', 404)); };
  await classes.deleteMany({ faculty: req.params.id });
  await faculty.findOneAndDelete({ id: req.params.id });
  sendResponse(faculty, 204, res);
};