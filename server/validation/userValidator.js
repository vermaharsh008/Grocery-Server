const { body, validationResult } = require("express-validator");

// This function contains the rules for validation
const userValidationRules = signup => {
  let validate = [
    // checks if email is:
    // i) empty
    // ii) valid email
    body("email")
      .not()
      .isEmpty()
      .withMessage("Must provide email")
      .isEmail()
      .withMessage("Must be a valid email"),
    // Checks if password is:
    // i) empty
    // ii) minimum length 8 char
    body("password")
      .not()
      .isEmpty()
      .withMessage("Must provide password")
      .isLength({ min: 8 })
      .withMessage("Password must be 8 characters long")
  ];
  // Checks if name is empty
  if (signup)
    validate.push(
      body("name")
        .not()
        .isEmpty()
        .withMessage("Must provide name")
    );
  return validate;
};

const validate = (req, res, next) => {
  // Request contains a list of errors to be returned
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    // If there are no errors then it calls the next()
    return next();
  }
  const extractedErrors = [];
  // Errors are extracted from the req and are presented in a formated way
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  // Returns all the errors
  return res.status(422).json({
    error: extractedErrors
  });
};

module.exports = {
  userValidationRules,
  validate
};
