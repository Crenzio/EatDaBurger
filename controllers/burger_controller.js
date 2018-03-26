var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    var load = {
      burgers: data
    };
    console.log(load);
    res.render("index", load);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create([
    "burger_name", "description", "devoured"
  ], [
      req.body.burger_name, req.body.description, req.body.devoured
    ], function (result) {
      res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.update({
    devoured: req.body.devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
