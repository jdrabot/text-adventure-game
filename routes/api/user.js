const express = require('express');

const router = express.Router();

const { User } = require('../../models');
const passport = require('../../passport');

router.post('/', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err) {
      console.log('User Create Error: ', err);
      return;
    }

    if (user) {
      res.json({
        error: `Sorry, already a user with the username: ${username}`,
      });
      return;
    }

    const newUser = new User({
      email,
      password,
    });

    newUser.save((err, savedUser) => {
      if (err) return res.json(err);

      res.json(savedUser);
    });
  });
});

router.post(
  '/login',
  (req, res, next) => {
    next();
  },
  passport.authenticate('local'),
  async (req, res) => {
    try {
        res.send({
          user: req.user,
        });

    } catch (err){
      console.log(err);
      res.json(err);
    }
  }
);

router.get('/me', async (req, res) => {
  if (req.user) {
    const userData = await User.findById(req.user._id);
    res.json({ user: userData });
  } else {
    res.json({ user: null });
  }
});

router.post('/logout', async (req, res) => {
  if (req.user) {
    try {
      req.logout();
      res.status(200).json({ msg: 'LOGGED OUT' });
    }catch (err) {
      console.log(err);
    }
  } else {
    res.status(404).json({ msg: 'NO USER TO LOGOUT' });
  }
});

module.exports = router;
