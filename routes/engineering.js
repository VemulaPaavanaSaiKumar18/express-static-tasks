const express = require("express");
const router = express.Router();
const path = require("path");
const server = express();
const staticImg = path.join(__dirname, "../public/images");

router.get("/courses", function (req, res, next) {
  let courses = {
    sub1: "English",
    sub2: "python",
    sub3: "Chemistry",
    sub4: "physics",
    sub5: "Maths",
    sub6: "Engineering Graphics",
  };
  res.json({
    data: courses,
  });
});
router.get("/labs", function (req, res, next) {
  let labs = {
    lab1: "python",
    lab2: "Chemistry",
    lab3: "physics",
  };
  res.json({
    data: labs,
  });
});
server.use(express.static(staticImg));
router.get("/img", function (req, res, next) {
  res.sendFile(path.join(staticImg, "laptop.jpg"));
});

module.exports = router;
