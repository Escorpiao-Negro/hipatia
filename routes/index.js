var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.render("index");
});

router.get("/upload", function(req, res, next) {
  res.render("upload");
});

router.get("/search", function(req, res, next) {
  res.render("search");
});

router.get("/about", function(req, res, next) {
  res.render("about");
});

module.exports = router;
