const mongoose = require("mongoose");
const ProductsSchema = require("./Products");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  zipCode: {
    type: Number,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  products: [ProductsSchema],
});

UserSchema.statics.doesUserExistInDatabase = async function (email) {
  try {
    const user = await this.findOne({ email });
    return !!user;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = mongoose.model("User", UserSchema);
