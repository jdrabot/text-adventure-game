require('dotenv').config();

const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3002;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/text_adventure_game')
  .then(() => {
    console.log("Connected to Mongoose")
  }, (err) => {
    console.log(`Mongoose connection err:\n${err}`)
  });

app.use(
  session({
    secret: process.env._SECRET,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    }),
    resave: false,
    saveUninitialized: false
  })
)

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
