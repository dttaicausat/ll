const Router = require("express").Router();

let User = require("../model/user.model");

Router.route("/").get( (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

Router.route("/").post( (req, res) => {
  User.find({username:req.body.username})
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});
Router.route("/add").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const newUser = new User({ username, password });
  newUser
    .save()
    .then(() => res.json({ addStatus: "success" }))
    .catch((err) => res.status(400).json(err));
});
module.exports = Router;
