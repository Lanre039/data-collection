const { registerUser } = require("../controllers/UserController");
const parser = require("../services/cloudinary/cloudinadaryConfig");
const { registrationValidator } = require("../validators/UserValidator");

const userRoute = (app) => {
  app.post(
    "/api/user/register",
    [registrationValidator(), parser.single("image")],
    registerUser
  );
};

module.exports = userRoute;
