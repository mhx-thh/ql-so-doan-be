const Place = require('../models/place');
const handler = require('../utils/handlerFactory');

exports.getAllPlace = handler.getAll(PlaceModel);
exports.getOnePlaceById = handler.getOne(PlaceModel);
exports.createPlace = handler.createOne(PlaceModel);
exports.updatePlaceById = hander.updateOne(PlaceModel);
exports.deletePlaceById = hander.deleteOne(PlaceModel);