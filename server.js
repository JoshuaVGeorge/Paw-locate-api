const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const jwt = require("jsonwebtoken");

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("welcome to paw-locate-api");
});

// routes

app.listen(port, () => {
	console.log("paw-locate-api launched");
});
