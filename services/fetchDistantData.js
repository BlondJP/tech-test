async function fetchData({ fetch, url }) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("data fetching has failed");
  }
}

module.exports = fetchData;
