const User = require("../models/User");

module.exports = {
  save: async function (userData) {
    const user = new User({
      ...userData,
    });

    const data = await user.save();

    return data;
  },
};
