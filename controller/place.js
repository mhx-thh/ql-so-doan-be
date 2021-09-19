const PlaceModel = require('../models/place');
const handler = require('../utils/handlerFactory');

exports.getAllPlace = handler.getAll(PlaceModel);
exports.getOnePlaceById = handler.getOne(PlaceModel);
exports.createPlace = handler.createOne(PlaceModel);
exports.updatePlaceById = handler.updateOne(PlaceModel);
exports.deletePlaceById = handler.deleteOne(PlaceModel);