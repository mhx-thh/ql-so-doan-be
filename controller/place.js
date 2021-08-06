const Place = require('../models/place');
const handler = require('../utils/handlerFactory');

exports.getAll = handler.getAll(Place);

exports.getPlace = async (req, res, next) => {
    await Place.findOne({ id: req.body.id })
        .then(result => {
            sendResponse(result, StatusCodes.OK, res);
        })
        .catch(err => {
            return next(new AppError('No document found!', StatusCodes.NOT_FOUND));
        })
};

exports.createPlace = handler.createOne(Place);

// exports.updatePlace = handler.updateOne(Place);

// exports.deletePlace = handler.deleteOne(Place);

exports.updatePlace = async (req, res, next) => {
    const place = await Place.findOne({ id: req.body.id });
    if (place) {
        await Place.updateOne({ id: place.id }, {
            name: req.body.name
        });
        await place.save();
        res.status(200).json({ message: "Place updated!" });
    } else {
        res.status(401).json({ message: "Place could not be found!" });
    };
};

exports.deletePlace = async (req, res, next) => {
    await Place.deleteOne({ id: req.body.id })
        .then(result => {
            res.status(200).json({ message: "Place deleted!" });
        })
        .catch(err => {
            res.status(401).json({ message: "Place could not be found!" });
        })
};