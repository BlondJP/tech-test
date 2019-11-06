async function getOnePlayerController({ getOnePlayerById }, req, res) {
  const { id } = req.params;

  try {
    const player = await getOnePlayerById(id);
    return res.send(player);
  } catch (error) {
    if (error.message === "player not found") {
      return res.status(404).send(`player ${id} not found`);
    }
  }
}

module.exports = getOnePlayerController;
