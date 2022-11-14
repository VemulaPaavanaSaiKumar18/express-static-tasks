var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");
let video = path.join(__dirname, "../public/videos");
let audio = path.join(__dirname, "../public/audio");

router.get("/earth", function (req, res, next) {
  res.writeHead(200, { "Content-Type": "video/mp4" });

  let videoStream = fs.createReadStream(path.join(video, "earth.mp4"));

  videoStream.pipe(res);
});
router.get("/audioMP4", function (req, res, next) {
  res.writeHead(200, { "Content-Type": "audio/mp4" });

  let audioStream = fs.createReadStream(path.join(audio, "iphone.mp3"));

  audioStream.pipe(res);
});
router.get("/audioOGG", function (req, res, next) {
  res.writeHead(200, { "Content-Type": "audio/OGG" });

  let audioStream = fs.createReadStream(
    path.join(audio, "file_example_OOG_1MG.ogg")
  );

  audioStream.pipe(res);
});
router.get("/audioWAV", function (req, res, next) {
  res.writeHead(200, { "Content-Type": "audio/WAV" });

  let audioStream = fs.createReadStream(
    path.join(audio, "file_example_WAV_1MG.wav")
  );

  audioStream.pipe(res);
});

module.exports = router;
