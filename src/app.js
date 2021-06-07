require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const savedGameRouter = require('./saved-games/saved-game-router');
const authRouter = require('./auth/auth-router');
const userRouter = require('./user/user-router');

const app = express();

const morganOption = process.env.NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(cors());
app.use(helmet());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/save', savedGameRouter);

app.get('/', (req, res) => {
  // eslint-disable-next-line semi
  res.send('Hello, world!');
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (process.env.NODE_ENV === 'production') {
    response = { error: { message: 'production server error:  ' + error.message } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;
