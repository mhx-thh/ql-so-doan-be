const Book = require("../models/book");

exports.createBook = async (req, res, next) => {
  const book = new Book({
    SID: req.body.SID,
    Name: req.body.Name,
    DOB: req.body.DOB,
    YB: req.body.YB,
    Faculity: req.body.Faculity,
    Phone: req.body.Phone,
    IC: req.body.IC,
    DJU: req.body.DJU,
    DJCP: req.body.DJCP,
    PositionHSU: req.body.PositionHSU,
    ClassOfficePosition: req.body.ClassOfficePosition,
    Talent: req.body.Talent,
    Approval: null
  });
  book.save()
    .then(
      res.status(201).json({
        message: "Book created!"
      })
    )
    .catch(err => {
      res.status(400).json({
        message: err.message
      })
    });
};

exports.updateApproval = async (req, res, next) => {
  let book = await Book.findOne({ SID: req.body.SID });
  if (book) {
    await Book.updateOne({ _id: book._id }, {
      $set: {
        Approval: req.body.Approval,
      }
    });
    await book.save();
    return res.status(200).json({ message: "Approval updated!" });
  } else {
    return res.status(401).json({ message: "SID not found!" });
  };
};

exports.updateYouthBranch = async (req, res, next) => {
  let book = await Book.findOne({ SID: req.body.SID });
  if (book) {
    await Book.updateOne({ _id: book._id }, {
      $set: {
        YB: req.body.YB
      }
    });
    await Book.save();
    return res.status(200).json({ message: "Youth Branch updated!" })
  } else {
    return res.status(401).json({ message: "SID not found!" });
  }
};