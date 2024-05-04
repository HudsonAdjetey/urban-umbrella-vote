require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { errorHandler, notFound } = require("./handlers");
const runDb = require("./controllers/dbConfig.js");

const app = express();
const port = process.env.PORT || 4000;
// app.use(express.static('public'))

runDb().catch(console.dir);

app.use(cors());
app.use(bodyParser.json());

app.use(express.json());

app.get("/", (req, res) => res.send("Hello world"));

app.use(notFound);
app.use(errorHandler);
app.listen(port, console.log("Server started on ", port));
