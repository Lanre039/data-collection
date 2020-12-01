const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const { cloud_name, api_key, api_secret } = require("../../config/keys");

cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "data-collection",
  llowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }],
  filename: (req, file, callback) => {
    const name = file.originalname;
    callback(null, name);
  },
  size: 1000000, //1mb
});

const parser = multer({ storage });

module.exports = parser;
