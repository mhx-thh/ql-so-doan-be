const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const handler = require('../utils/handlerFactory');

const User = require("../models/user");

exports.getAllUser = handler.getAll(User);
exports.getOneUserById = handler.getOne(User);
exports.updateUserById = handler.updateOne(User);
exports.deleteUserById = handler.deleteOne(User);

exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        typeAccount: req.body.typeAccount
      });
      user.save()
        .then(result => {
          res.status(201).json({
            message: "User created!",
            result: result
          })
        })
        .catch(err => {
          res.status(500).json({
            message: "Invalid authentication credentials!",
            err
          })
        })
    });
}

exports.userLogin = async (req, res, next) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    const result = await bcrypt.compare(req.body.password, user.password);
    if (!result) {
      return res.status(401).json({
        message: "Sai mật khẩu!"
      })
    }
    const token = await jwt.sign(
      { email: user.email, userId: user._id },
      process.env.JWT_KEY,
      { expiresIn: "720h" }
    );
    return res.status(200).json({
      token: token,
      expiresIn: 43200,
      username: user.name,
      email: user.email,
      typeAccount: user.typeAccount
    });
  }
  else if (!user) {
    return res.status(401).json({
      message: "Không tìm thấy người dùng!"
    })
  }
}
