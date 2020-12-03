require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { mongoDbURI } = require("./config/keys");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Accept, X-Requested-With, Authorization, Content-Type, x-custom-header"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: "GET,PUT,POST,PATCH,DELETE,OPTIONS",
  })
);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  mongoose.connect(
    mongoDbURI,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    },
    (err, success) => {
      if (err) {
        console.log("An error occurred while connecting to the database");
        return;
      }
      console.log("Successfully connected to the database");
    }
  );
});

const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.on("open", async () => {
  require("./routes/User")(app);

  if (process.env.NODE_ENV === "production") {
    app.use(express.static("../client/build"));

    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }
  console.log(`Server listening on port ${PORT}`);
});
