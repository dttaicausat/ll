const Router = require("express").Router();

let item = require("../model/Product.model");

Router.route("/").get((req, res) => {
  item
    .find()
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json(err));
});
Router.route("/add").post((req, res) => {
  const name = req.body.name;
  const detail = req.body.detail;
  const url = req.body.url;
  const type = req.body.type;
  const id = Number(req.body.id);
  const quantity = Number(req.body.quantity);
  const cost = Number(req.body.cost);
  const adjustment = Number(req.body.adjustment);
  const love = Number(req.body.love);
  const newUser = new item({
    name,
    love,
    cost,
    detail,
    url,
    adjustment,
    type,
    id,
    quantity,
  });
  newUser
    .save()
    .then(() => res.json({ addStatus: "success" }))
    .catch((err) => res.status(404).json(err));
});
Router.route("/:id").get((req, res) => {
  item
    .findById(req.params.id)
    .then((love) => res.json(love))
    .catch((err) => res.status(404).json(err));
});

Router.route("/:id").delete((req, res) => {
  item
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("deleted succcess"))
    .catch((err) => res.status(400).json("errr" + err));
});
Router.route("/update/:id").post((req, res) => {
  item
    .findById(req.params.id)
    .then((ex) => {
      (ex.name = req.body.name),
        (ex.detail = req.body.detail),
        (ex.cost = Number(req.body.cost)),
        (ex.type = req.body.type),
        (ex.url = req.body.url),
        (ex.id = Number(req.body.id)),
        (ex.quantity = Number(req.body.quantity)),
        (ex.adjustment = Number(req.body.adjustment)),
        (ex.love = Number(req.body.love));
      ex.save()
        .then(() => {
          res.json("upddated ");
        })
        .catch((err) => res.status(400).json(err));
    })
    .catch((err) => res.status(400).json("err" + err));
});
module.exports = Router;
