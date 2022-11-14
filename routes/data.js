const awsData = request("../utils/awsSecret.js");

const data = async () => {
  const apiKey = await awsData();
  console.log(apiKey);
};
