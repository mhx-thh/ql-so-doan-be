var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var handlebars = require('handlebars');
var fs = require('fs');

exports.sendMail = (req, res, next) => {
  var readHTMLFile = function (path, callback) {
    fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
      if (err) {
        throw err;
        callback(err);
      }
      else {
        callback(null, html);
      }
    });
  };

  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASSWORD
    }
  }));

  readHTMLFile(process.env.LINK_HTML, function (err, html) {
    var template = handlebars.compile(html);
    var replacements = req.body
    var htmlToSend = template(replacements);
    var mailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: req.body.email,
      subject: req.body.subject,
      html: htmlToSend
    };
    transporter.sendMail(mailOptions, function (error, response) {
      if (error) {
        console.log(error);
        return res.status(404).json({ "message": "Sent mail failed!" });
      } else {
        console.log('Email sent: ' + response.response);
        return res.status(200).json({ "message": "Sent mail successfull!" });
      }
    });
  })
}
