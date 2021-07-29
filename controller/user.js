const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

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

// exports.updateCustomer = async (req, res, next) => {
//   let user = await Customer.findOne({ CEmail: req.body.email });
//   await Customer.updateOne({ _id: user._id }, {
//     $set: {
//       CName: req.body.name,
//       CPhoneNumber: req.body.phonenumber,
//       CGender: req.body.gender,
//     }
//   })
//   await user.save();

//   return res.status(201).json({
//     name: req.body.name,
//     phonenumber: req.body.phonenumber,
//     gender: req.body.gender
//   })
// }

exports.updateUser = async (req, res, next) => {
  let user = await User.findOne({ email: req.body.email });
  await User.updateOne({ _id: user._id }, {
    $set: {
      name: req.body.name
    }
  })
  await user.save();

  return res.status(201).json({
    name: req.body.name
  })
}

exports.userLogin = async (req, res, next) => {
  let user = await User.findOne({ email: req.body.email });
  //console.log(user);
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

// exports.checkExistUser = async (req, res, next) => {

//   let user = await Customer.findOne({ CEmail: req.body.email }) || await DeliveryCompany.findOne({ DCEmail: req.body.email });

//   if (user) {
//     return res.status(401).json({ message: "Email is used!" });
//   }
//   return res.status(200).json({ message: "Email can use!" });
// }

exports.checkExistUser = async (req, res, next) => {

  let user = await User.findOne({ email: req.body.email });

  if (user) {
    return res.status(401).json({ message: "Email is used!" });
  }
  return res.status(200).json({ message: "Email can use!" });
}
