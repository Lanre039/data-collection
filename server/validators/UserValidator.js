const { check } = require("express-validator");

module.exports = {
  registrationValidator: () => [
    check("firstName", "The field first name is required")
      .not()
      .isEmpty()
      .isLength({ min: 3 }),
    check("lastName", "The field last name is required")
      .not()
      .isEmpty()
      .isLength({ min: 3 }),
    check("city", "The field city is required").not().isEmpty(),
    check("state", "The field state is required").not().isEmpty(),
    check("zipCode", "The field zip is required").not().isEmpty().isNumeric(),
    check("email", "The email field is required").not().isEmpty().isEmail(),
    check("dateOfBirth", "The field date of birth is required").not().isEmpty(),
  ],
};
