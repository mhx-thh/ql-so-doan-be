const Place = require('../models/place');

exports.createPlace = async (req, res, next) => {
    const place = new Place({
        id: req.body.id,
        name: req.body.name
    });
    place.save()
        .then(result => {
            res.status(201).json({ message: "Place created!" });
        })
        .catch(err => {
            res.status(400).json({ message: err.message });
        });
}

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
}

exports.deletePlace = async (req, res, next) => {
    await Place.deleteOne({ id: req.body.id })
        .then(result => {
            res.status(200).json({ message: "Place deleted!" });
        })
        .catch(err => {
            res.status(401).json({ message: "Place could not be found!" });
        })
}