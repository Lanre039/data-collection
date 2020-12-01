const mongoose = require("mongoose");
// const validator = require("validator");
const { ProductsSchema } = require("./Products");

const UserSchema = new mongoose.Schema({
  name: {
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
  zip: {
    type: String,
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
  passport: {
    type: String,
    required: true,
  },
  products: [ProductsSchema],
});

module.exports = mongoose.model("User", UserSchema);
