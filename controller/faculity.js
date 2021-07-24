const Faculity = require('../models/faculity');
const handler = require('../utils/handlerFactory');

exports.addFaculity = handler.createOne(Faculity);

exports.getListNameFaculities = (req, res, next) => {

  Faculity.find({}, '-_id __v0 name id', (err, txs) => {
    if (!err) res.status(200).json(txs);
    else
      res.status(500).json({
        message: "Adding faculity failed!"
      })
  })
}


// exports.addFaculity = async (req, res, next) => {
//   const faculity = new Faculity({ id: req.body.id, name: req.body.name });
//   faculity.save().then((err) => {
//     res.status(200).json({ message: err });
//   })
//     .catch(error => {
//       res.status(500).json({
//         message: "Adding faculity failed!"
//       })
//     })
// }