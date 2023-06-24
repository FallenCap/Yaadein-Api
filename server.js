const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('Uncaught Exception...!\nShutting down application....');
  process.exit(1);
});

const app = require('./app');

// TODO: Connecting Database
const db = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection sucessfull!');
  })

// TODO: Assigning port
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// *Handeling unhandeledRejection error.
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('Unhandeled Rejection...!\nShutting down application....');
  server.close(() => {
    process.exit(1);
  });
});
