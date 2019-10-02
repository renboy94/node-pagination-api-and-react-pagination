require("dotenv").config();
const express = require("express");
const app = express();
var cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/users");
const paginatedResults = require("./middlewares/paginateResults");

app.use(cors());

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds229108.mlab.com:29108/pagination`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.once("open", async () => {
  if ((await User.countDocuments().exec()) > 0) return;

  Promise.all([
    User.create({ name: "User 1" }),
    User.create({ name: "User 2" }),
    User.create({ name: "User 3" }),
    User.create({ name: "User 4" }),
    User.create({ name: "User 5" }),
    User.create({ name: "User 6" }),
    User.create({ name: "User 7" }),
    User.create({ name: "User 8" }),
    User.create({ name: "User 9" }),
    User.create({ name: "User 10" }),
    User.create({ name: "User 11" }),
    User.create({ name: "User 12" }),
    User.create({ name: "User 13" }),
    User.create({ name: "User 14" }),
    User.create({ name: "User 15" })
  ]).then(() => console.log("Added Users"));
});

app.get("/users", paginatedResults(User), (req, res) => {
  res.json(res.paginatedResults);
});

app.listen(3000);
