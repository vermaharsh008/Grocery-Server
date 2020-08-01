const User = require("../models/user");
const jwt = require("jsonwebtoken"); // to generate signed token
const { errorHandler } = require("../helpers/dbErrorHandler");
const expressJwt = require("express-jwt"); // for authorization check
const JWT_SECRET = require("../config/keys");

exports.register = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({ error: errorHandler(err) });
    }
    // Generate a signed token with user id and secret key
    const token = jwt.sign({ _id: user._id }, String(JWT_SECRET));
    user.password = undefined;
    user.salt = undefined;
    return res.status(201).json({ token, user });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .status(404)
        .json({ error: "User doesn't exist. Please signup" });
    }
    // If user does exist then match the password
    user.comparePassword(password, (err, isMatch) => {
      if (err) throw err;
      if (!isMatch) {
        return res.status(401).json({ error: "Password doesn't match" }); // Unauthorized
      }
      // Generate a signed token with user id and secret key
      const token = jwt.sign({ _id: user._id }, String(JWT_SECRET));
      const { _id, name, email, role } = user;
      return res.json({ token, user: { _id, name, email, role } });
    });
  });
};

exports.requireSignIn = expressJwt({
  secret: String(JWT_SECRET),
  userProperty: "auth"
});

exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!user) {
    return res.status(401).json({
      error: "Access denied"
    });
  }
  next();
};

exports.isAdmin = (req, res, next) => {
  if (req.profile.role == 0) {
    return res.status(403).json({
      error: "Admin resource! Access denied"
    });
  }
  next();
};

exports.isStore = (req, res, next) => {
  if (req.profile.role == 0 || req.profile.role == 1) {
    return res.status(403).json({
      error: "Store resource! Access denied"
    });
  }
  next();
};
