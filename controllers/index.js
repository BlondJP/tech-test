// here we inject the business logic into the controllers
const { getAllPlayers, getOnePlayerById } = require("../services");

const getAllPlayersController = require("./getAllPlayersController");
module.exports.getAllPlayersController = getAllPlayersController.bind(null, {
  getAllPlayers
});

const getOnePlayerController = require("./getOnePlayerController");
module.exports.getOnePlayerController = getOnePlayerController.bind(null, {
  getOnePlayerById
});
