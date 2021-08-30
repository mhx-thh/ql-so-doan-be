const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const Receipt = require("../models/receipt");
const receiptController = require('./receipt');

exports.sendMail = async (req, res, next) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASSWORD
    }
  });
  // const transporter = nodemailer.createTransport(smtpTransport({
  //   service: 'gmail',
  //   host: 'smtp.gmail.com',
  //   auth: {
  //     user: process.env.GMAIL_EMAIL,
  //     pass: process.env.GMAIL_PASSWORD
  //   }
  // }));

  const find = await Receipt.findOne({ SID: req.params.id });
  if (find === null) {
    await receiptController.createOneNoReturnResponse(req, res, next);
  }
  const receipt = await Receipt.findOne({ SID: req.params.id });
  console.log(receipt)
  const mailOptions = {
    from: process.env.GMAIL_EMAIL,
    to: receipt.Email,
    subject: `Y.U.S - BIÊN NHẬN SỔ ĐOÀN - ${receipt.SID}`,
    attachments: {
      filename: process.env.FILE_NAME || 'bien_nhan.pdf',
      content: new Buffer.from(receipt.Data)
    }
  };
  transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      transporter.close();
      return res.status(404).json({ "message": "Sent mail failed!" });
    } else {
      console.log('Email sent: ' + response.response);
      transporter.close();
      return res.status(200).json({ "message": "Sent mail successfull!" });
    }
  });
};
