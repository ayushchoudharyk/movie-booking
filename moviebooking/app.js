const express = require('express');
const cors = require('cors');

const db = require('./models');
const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Connected to the database!');
//   })
//   .catch((err) => {
//     console.log('Cannot connect to the database!', err);
//     process.exit();
//   });

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Upgrad Movie booking application development',
  });
});

module.exports = app;
