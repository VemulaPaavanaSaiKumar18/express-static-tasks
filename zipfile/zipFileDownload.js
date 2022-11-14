const pdfParser = require("pdf-parse");
const decompress = require("decompress");
const path = require("path");
const fs = require("fs");
const axios = require("axios");

let filePath = path.join(__dirname, "./storeZip/");
const downloadZipFile = async () => {
  let response = await axios({
    url: "http://ncert.nic.in/textbook/pdf/ahhn1dd.zip",
    method: "GET",
    responseType: "stream",
  });
  let write = fs.createWriteStream(filePath + "sample.zip");
  response.data.pipe(write);
  console.log("file download completed mawa");
};

// downloadZipFile();

const unZipFile = async () => {
  try {
    const files = await decompress(
      filePath + "sample.zip",
      filePath + "sample"
    );
    console.log(files);
  } catch (error) {
    console.log(error);
  }
};

// unZipFile()

const validatingFiles = () => {
  let path = filePath + "sample";
  let readFiles = fs.readdirSync(path);
  readFiles.map((eachItems) => {
    let stats = fs.statSync(`${path}/${eachItems}`);
    let size = stats.size / (1024 * 1024);
    if (size > 0) {
      console.log(`${eachItems} passed size validation`);
    } else {
      console.log(`file size is 0 bites${eachItems}`);
    }
    try {
      let bufferData = fs.readFileSync(`${path}/${eachItems}`);
      pdfParser(bufferData).catch((error) => {
        console.log(`${eachItems} error`);
        console.log(error.message);
      });
    } catch (error) {
      console.log(error);
    }
  });
};
validatingFiles();
