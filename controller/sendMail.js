const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const handlebars = require('handlebars');
const fs = require('fs');
const pdf = require('html-pdf');
const AppError = require('../utils/appError');
const Book = require("../models/book");


exports.sendMail = async (req, res, next) => {
  const readHTMLFile = function (Model, path, callback) {
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

  const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASSWORD
    }
  }));

  const book = await Book.findOne({ SID: req.params.id })
  if (!book) return new AppError('No document found!', 404);

  await readHTMLFile(book, process.env.LINK_HTML, function (err, html) {
    const date = new Date();
    const template = handlebars.compile(html);
    const replacements = {
      book: req.body.book,
      number: req.body.number,
      name: book.Name,
      id: book.SID,
      faculty: book.Faculty,
      months: `9, 10, 11, 12/${date.getYear() - 100}`,
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    }
    const html_replaced = template(replacements);
    const pdf_options = {
      format: 'A4',
      orientation: 'portrait',
    };
    pdf.create(html_replaced, pdf_options).toBuffer((err, buffer) => {
      if (err) return next(AppError('Can not create PDF', 400, err));
      const mailOptions = {
        from: process.env.GMAIL_EMAIL,
        to: book.Email,
        subject: `Y.U.S - BIÊN NHẬN SỔ ĐOÀN - ${book.SID}`,
        attachments: {
          filename: process.env.FILE_NAME || 'bien_nhan.pdf',
          content: new Buffer.from(buffer)
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
    });
  });
};

// exports.sendMail = (req, res, next) => {
//   const readHTMLFile = function (path, callback) {
//     fs.readFile(path, { encoding: 'utf-8' }, function (err, html) {
//       if (err) {
//         throw err;
//         callback(err);
//       }
//       else {
//         callback(null, html);
//       }
//     });
//   };

//   const transporter = nodemailer.createTransport(smtpTransport({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     auth: {
//       user: process.env.GMAIL_EMAIL,
//       pass: process.env.GMAIL_PASSWORD
//     }
//   }));


//   readHTMLFile(process.env.LINK_HTML, function (err, html) {
//     const template = handlebars.compile(html);
//     const replacements = req.body
//     const html_replaced = template(replacements);
//     const pdf_options = {
//       format: 'A4',
//       orientation: 'portrait',
//     };
//     pdf.create(html_replaced, pdf_options).toBuffer((err, buffer) => {
//       if (err) return next(AppError('Can not create PDF', 400, err));
//       const mailOptions = {
//         from: process.env.GMAIL_EMAIL,
//         to: req.body.email,
//         subject: req.body.subject,
//         text: req.body.text,
//         attachments: {
//           filename: process.env.FILE_NAME || 'bien_nhan.pdf',
//           content: new Buffer.from(buffer)
//         }
//       };
//       transporter.sendMail(mailOptions, function (error, response) {
//         if (error) {
//           console.log(error);
//           transporter.close();
//           return res.status(404).json({ "message": "Sent mail failed!" });
//         } else {
//           console.log('Email sent: ' + response.response);
//           transporter.close();
//           return res.status(200).json({ "message": "Sent mail successfull!" });
//         }
//       });
//     });
//   });
// };
