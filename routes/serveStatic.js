var express = require("express");
var router = express.Router();
const path = require("path");
const server = express();

let public = path.join(__dirname, "../public/images");

server.use(express.static(public));
router.get("/static", function (req, res, next) {
  res.sendFile(path.join(public, "express-logo.png"));
});

module.exports = router;
