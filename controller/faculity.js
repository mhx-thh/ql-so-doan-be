const Faculity = require('../models/faculity');
const handler = require('../utils/handlerFactory');
const sendResponse = require('../utils/sendResponse');
const classes = require('../models/class');
const AppError = require('../utils/appError');


exports.getListNameFaculities = (req, res, next) => {

  Faculity.find({}, '-_id __v0 name id', (err, txs) => {
    if (!err) res.status(200).json(txs);
    else
      res.status(500).json({
        message: "Adding faculity failed!"
      })
  })
}

exports.addFaculity = handler.createOne(Faculity);

exports.updateFaculity = async (req, res, next) => {
  await Faculity.findOneAndUpdate({ id: req.params.id }, req.body)
    .then(result => {
      sendResponse(result, 200, res);
    })
    .catch(err => {
      sendResponse(err, 404, res);
    })
};

exports.deleteFaculity = async (req, res, next) => {

  const faculty = await Faculity.findOne({ id: req.params.id });
  if (!faculty) { return next(new AppError('No document found!', 404)); };
  await classes.deleteMany({ faculity: req.params.id });
  await Faculity.findOneAndDelete({ id: req.params.id });
  sendResponse(faculity, 204, res);
};