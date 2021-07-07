const passport = require('passport');

const LocalStrategy = require('./localStrategy');
const User = require('../models/user');


passport.serializeUser(function (user, done) {
  done(null, { _id: user._id, email: user.email });
});

passport.deserializeUser((id, done) => {
  User.findOne({ _id: id }, 'email', (err, user) => {
    console.log(err)
    done(null, user);
  });
});

//  Use Strategies
passport.use(LocalStrategy);

module.exports = passport;
