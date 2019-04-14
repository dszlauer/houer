const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

// CONTROLLER
const controller = require("./controller");

// DB MASSIVE
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("db is connected");
  })
  .catch(err => console.log("Yo db is not connecting"));

//ENDPOINTS
app.get("/api/houses", controller.getHouses);
app.post("/api/houses", controller.addHouse);
app.delete("/api/house/:property_id", controller.deleteHouse);

PORT = process.env.SERVER_PORT || 4000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
