const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config({ path: './.env' });

const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/book');
const placeRoutes = require('./routes/place');
const classRoutes = require('./routes/class');
const histotyRoutes = require('./routes/history');
const requestRoutes = require('./routes/request');

const errorHandler = require('./utils/errorHandler');
const AppError = require('./utils/appError');

mongoose.connect(
  process.env.MONGOOSE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }
)
  .then(() => { console.log('Connected to database!') })
  .catch(() => {
    console.log('Connection failed');
  });

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Request-With, Content-Type, Accept, Authorization');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'POST,GET,PUT,PATCH,DELETE,OPTIONS'
  );
  next();
});

app.use('/api/user', userRoutes); // Tài khoản
app.use('/api/book', bookRoutes); // Sổ đoàn
app.use('/api/place', placeRoutes); // Vị trí lưu trữ
app.use('/api/class', classRoutes); // Danh sách chi đoàn
app.use('/api/history', histotyRoutes); // Lịch sử lưu trữ sổ đoàn
app.use('/api/request', requestRoutes); // Yêu cầu gửi lên admin duyệt

app.all('*', (request, response, next) => {
  next(new AppError(`Can't find ${request.originalUrl} on this server!`, 404));
});
app.use(errorHandler);

module.exports = app;
