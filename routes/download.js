var express = require("express");
var router = express.Router();
const control = require("../src/downloadFile");
router.get("/download", function (req, res, next) {
  control.downloadFile(req, res);
});
router.get("/downloadLink", function (req, res, next) {
  control.downloadFileLink(req, res);
});

module.exports = router;
