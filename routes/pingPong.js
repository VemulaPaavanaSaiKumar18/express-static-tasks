var express = require("express");
var router = express.Router();
const control = require("../src/pingPongControl");

/* GET users listing. */
router.post("/pingPong", function (req, res, next) {
  control.pingPongControl(req, res);
});

module.exports = router;
