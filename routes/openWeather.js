var express = require("express");
var router = express.Router();
const request = require("request");
const awsData = require("../utils/awsSecret.js");

router.get("/", async (req, res, next) => {
  const secret_name = "prod/apikeys/weather";
  const keyData = await awsData(secret_name);
  let data = JSON.parse(keyData);
  var options = {
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather",
    qs: {
      units: "metric",
      appid: data.apiKey,
      q: "bangalore",
    },
  };
  request(options, function (error, response, body) {
    if (error) {
      throw new Error(error);
    }
    // console.log(body);
  });
});

module.exports = router;
