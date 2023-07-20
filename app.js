const express = require('express');
const morgan = require('morgan');

const globalErrorHandler = require('./Controllers/errorController');
const songRouter = require('./Routes/songRoutes');
const AppErr = require('./Utils/appErr');

const app = express();

// *Middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.get('/', (req, res) => {
  res
    .status(200)
    .send('Welcome to Yaadein to browse the evergreen hindi classics📻🎼');
});

// *Routes
app.use('/api/v1/songs', songRouter);

// TODO: Handeling the errors of undefined routes
app.all('*', (req, res, next) => {
  next(new AppErr(`Can't find ${req.originalUrl} on this server`, 404));
});

// *Global error handeling middleware
app.use(globalErrorHandler);

module.exports = app;
