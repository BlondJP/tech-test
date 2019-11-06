const express = require("express");
const app = express();
const port = 4000;

// getting controllers
const {
  getAllPlayersController,
  getOnePlayerController
} = require("./controllers");

// endpoints
app.get("/players", getAllPlayersController);
app.get("/players/:id", getOnePlayerController);

app.listen(port, console.log(`tennis server listenning on port ${port}`));
