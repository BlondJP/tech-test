async function fetchLocalData({ filePath }) {
  try {
    const data = require(filePath);
    return data;
  } catch (error) {
    throw Error("data fetching has failed");
  }
}

module.exports = fetchLocalData;
