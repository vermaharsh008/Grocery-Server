const User = require("../models/user");

// Runs every time there is userID in the params of a URL
exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(404).json({
        error: "User not found"
      });
    }
    req.profile = user;
    next();
  });
};

// Returns current user without the salt and the password
exports.getUser = (req, res) => {
  req.profile.password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

exports.getUsers = (req, res) => {
  User.find({}, (err, users) => {
    users.forEach(user => {
      user.salt = undefined;
      user.password = undefined;
    });
    return res.status(200).json(users);
  });
};

// Updates the user information
exports.updateUser = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: "You are not authorized to perform this action",
          err
        });
      }
      user.password = undefined;
      user.salt = undefined;
      res.json(user);
    }
  );
};

exports.deleteUser = (req, res) => {
  let user = req.profile;
  User.deleteOne(user, (err, deletedUser) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    return res.status(200).json({
      deletedUser,
      msg: "User Deleted"
    });
  });
};
