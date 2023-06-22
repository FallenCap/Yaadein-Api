const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

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
  .catch((err) => {
    console.log(err);
  });

// TODO: Assigning port
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
