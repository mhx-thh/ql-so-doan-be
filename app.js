const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

dotenv.config({ path: './.env' });

const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/book');
const placeRoutes = require('./routes/place');
const facultyRoutes = require('./routes/faculty');
const classRoutes = require('./routes/class');
const histotyRoutes = require('./routes/history');
const requestRoutes = require('./routes/request');

const AppError = require('./utils/appError');
const errorHandler = require('./utils/errorHandler');

const app = express();

mongoose.connect(
  process.env.MONGOOSE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }
)
  .then(() => { console.log('Connected to database!') })
  .catch(() => {
    console.log('Connection failed');
  });

app.use(express.urlencoded({ extended: false }));
app.use(cors());

// middleware to show log on console
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined', {
    skip(req, res) { return res.statusCode < 400; }, // only log error responses
  }));
}

app.use('/api/user', userRoutes); // Tài khoản
app.use('/api/book', bookRoutes); // Sổ đoàn
app.use('/api/place', placeRoutes); // Vị trí lưu trữ
app.use('/api/faculty', facultyRoutes); // Danh sách khoa
app.use('/api/class', classRoutes); // Danh sách chi đoàn
app.use('/api/history', histotyRoutes); // Lịch sử lưu trữ sổ đoàn
app.use('/api/request', requestRoutes); // Yêu cầu gửi lên admin duyệt

app.all('*', (request, response, next) => {
  next(new AppError(`Can't find ${request.originalUrl} on this server!`, 404));
});
app.use(errorHandler);

module.exports = app;
