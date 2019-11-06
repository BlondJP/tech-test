async function getAllPlayersController({ getAllPlayers }, req, res) {
  try {
    const players = await getAllPlayers();
    return res.send(players);
  } catch (error) {
    if (error.message === "data fetching has failed") {
      return res.status(500).send(error.message);
    }
  }
}

module.exports = getAllPlayersController;
