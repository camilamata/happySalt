const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

require("dotenv-safe").config();

const db = require("./database/mongoDBconfig");
db.connect();

const clientRouter = require("./routes/clientsRoutes");
app.use("/clients", clientRouter);


module.exports = app;

