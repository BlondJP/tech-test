// here we are doing the dependency injection
// this way the functions will be dependency agnostic, reusable and easily testable
// I try to handle SRP with functionnal programming

// I usually work with a container like Awilix but this time I will use bind

// case ressource is http fetchable
// const fetch = require("node-fetch");
// const url =
//   "https://eurosportdigital.github.io/eurosport-node-developer-recruitment/headtohead.json";
// const fetchData = require("./fetchDistantData").bind(null, { fetch, url });

// case ressource is localy fetchable
const filePath = "../local_data";
const fetchData = require("./fetchLocalData").bind(null, { filePath });

const dependencies = { fetchData };
const getAllPlayers = require("./getAllPlayers");
module.exports.getAllPlayers = getAllPlayers.bind(null, dependencies);

const getOnePlayerById = require("./getOnePlayerById");
module.exports.getOnePlayerById = getOnePlayerById.bind(null, dependencies);
