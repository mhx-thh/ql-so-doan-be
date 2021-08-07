const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');
const payRoutes = require('./routes/pay');
const sendMailRoutes = require('./routes/sendMail');
const classRoutes = require('./routes/class');
const facultyRoutes = require('./routes/faculty');
const bookRoutes = require('./routes/book');
const approvedRoutes = require('./routes/approved_books');
const yearRoutes = require('./routes/school_years');
const notificationRoutes = require('./routes/notification');

const app = express();
dotenv.config({ path: './.env' });

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

app.use('/api/posts', postsRoutes);
app.use('/api/user', userRoutes);
app.use('/api/pay', payRoutes);
app.use('/api/sendMail', sendMailRoutes);
app.use('/api/class', classRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/book', bookRoutes);
app.use('/api/approved', approvedRoutes);
app.use('/api/year', yearRoutes);
app.use('/api/notification', notificationRoutes);

module.exports = app;
