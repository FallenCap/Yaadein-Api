const express = require('express');
const morgan = require('morgan');

const songRouter = require('./Routes/songRoutes');

const app = express();

// *Middlewares
app.use(morgan('dev'));
app.use(express.json());

// *Routes
app.use('/api/v1/songs', songRouter);

module.exports = app;
