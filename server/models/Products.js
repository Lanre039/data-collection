const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
});

module.exports = ProductsSchema;
