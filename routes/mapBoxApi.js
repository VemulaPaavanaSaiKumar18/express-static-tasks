var express = require("express");
const request = require("request");
var router = express.Router();
const awsData = require("../utils/awsSecret.js");

/* GET home page. */
router.get("/:place", async (req, res, next) => {
  const secret_name = "prod/apikeys/weather";
  const keyData = await awsData(secret_name);
  let data = JSON.parse(keyData);
  var options = {
    method: "GET",
    url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${req.params.place}.json`,
    qs: {
      access_token: data.mapBox,
      limit: 1,
    },
  };
  request(options, function (error, response, body) {
    if (error) {
      throw new Error(error);
    }
    let data = JSON.parse(body);
    let longitude = data.features[0].center[0];
    let latitude = data.features[0].center[1];
    res.json({
      lon: longitude,
      lat: latitude,
    });
  });
});

module.exports = router;
