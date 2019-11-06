async function getOnePlayerById({ fetchData }, id) {
  const { players } = await fetchData();

  const player = players.find(player => player.id === parseInt(id));

  if (!player) {
    throw new Error("player not found");
  }

  return player;
}

module.exports = getOnePlayerById;
