const pingPongControl = (req, res) => {
  try {
    let postData = {};
    postData.name = req.body.name;
    postData.age = req.body.age;
    res.json({
      Status: 200,
      postData: postData,
    });
  } catch (err) {
    res.json({
      Status: 404,
      error: "data not received" + err,
    });
  }
};

exports.pingPongControl = pingPongControl;
