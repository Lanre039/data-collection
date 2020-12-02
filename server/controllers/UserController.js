const { validationResult } = require("express-validator");
const User = require("../models/User");
const UserService = require("../services/UserService");
const ResponseService = require("../utils/ApiResonse");

module.exports = {
  registerUser: async function (req, res, next) {
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      return ResponseService.send(
        422,
        res,
        "One or more validation errors occurred",
        null,
        errors.array({ onlyFirstError: true })
      );
    }

    try {
      const {
        firstName,
        lastName,
        city,
        state,
        zipCode,
        email,
        dateOfBirth,
        products, //  array of {name, price, currency,}
      } = req.body;
      if (await User.doesUserExistInDatabase(email)) {
        return ResponseService.send(
          400,
          res,
          "User with the same email already exists",
          null,
          {
            msg: "User with the same email already exists",
          }
        );
      }
      if (!(await req.file)) {
        return ResponseService.send(
          422,
          res,
          "Profile picture not provided",
          null,
          {
            msg: "Profile picture not provided",
          }
        );
      }

      const createdUser = await UserService.save({
        firstName,
        lastName,
        city,
        state,
        zipCode,
        email,
        dateOfBirth,
        profilePicture: req.file.url,
        products: JSON.parse(products),
      });

      return ResponseService.send(
        201,
        res,
        "Successfully created new user",
        createdUser,
        null
      );
    } catch (error) {
      console.log(error);
      return ResponseService.send(
        500,
        res,
        "An error occurred while registering user",
        null,
        {
          msg: error,
        }
      );
    }
  },
};
