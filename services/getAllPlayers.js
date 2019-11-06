async function getAllPlayers({ fetchData }) {
  try {
    const { players } = await fetchData();
    return players;
  } catch (error) {
    throw new Error("players has not been got correctly");
  }
}

module.exports = getAllPlayers;
