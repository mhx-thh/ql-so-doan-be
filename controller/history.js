const History = require('../models/history');
const handler = require('../utils/handlerFactory');

exports.getHistory = handler.getOne(History);

exports.createHistory = handler.createOne(History);

exports.updateHistory = handler.updateOne(History);

exports.deleteHistory = handler.deleteOne(History);

exports.getAll = handler.getAll(History);

exports.getHistoryById = async (req, res, next) => {
    await History.findOne({ SID: req.params.id })
        .then(result => {
            res.status(200)
                .json({
                    message: "Success",
                    data: result
                });
        })
        .catch(err => {
            res.status(401)
                .json({ message: err.message });
        });
};

exports.updateHistoryById = async (req, res, next) => {
    const history = await History.findOne({ SID: req.params.id });
    if (history) {
        await History.updateOne({ _id: history._id }, {
            $set: {
                PlaceID: req.body.PlaceID,
                Time: Date.now()
            }
        });
        history.save();
        res.status(200).json({ message: "History updated!" });
    } else {
        res.status(401).json({ message: "Could not be found!" });
    };
};

exports.deleteHistoryById = async (req, res, next) => {
    const history = await History.findOne({ SID: req.params.id });
    if (history) {
        await History.deleteOne({ _id: history._id });
        return res.status(200).json({ message: "History deleted!" });
    } else {
        return res.status(401).json({ message: "History not found!" });
    }
};