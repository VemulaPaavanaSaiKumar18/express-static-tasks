const path = require("path");
const fs = require("fs");
const axios = require("axios");

const filepath = path.join(__dirname, "../public/images/");

const downloadFile = (req, res) => {
  let fileLink = req.query.fileName;
  console.log(filepath + fileName);

  if (fileName && fileName.trim() !== "" && fileName !== undefined) {
    fs.access(filepath + fileName, (err) => {
      if (!err) {
        res.download(filepath + fileName);
      } else {
        res.json({ error: "no file is there" });
      }
    });
  } else {
    res.json({ error: "Send the file name in params" });
  }
};

const downloadFileLink = async (req, res) => {
  let fileLink = req.query.fileLink;
  console.log(fileLink);
  let response = await axios({
    url: fileLink,
    method: "GET",
    responseType: "stream",
  });
  let write = fs.createWriteStream(filepath + "img.jpg");
  response.data.pipe(write);
  res.json({
    status: "success",
  });
};

exports.downloadFile = downloadFile;
exports.downloadFileLink = downloadFileLink;
