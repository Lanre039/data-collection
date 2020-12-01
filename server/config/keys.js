let prodVariable;

if (process.env.NODE_ENV === "production") {
  prodVariable = require("./prod.keys");
} else {
  prodVariable = require("./dev.keys");
}

module.exports = prodVariable;
