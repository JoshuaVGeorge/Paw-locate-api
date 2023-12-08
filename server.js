const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const jwt = require("jsonwebtoken");

require("dotenv").config();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/", (req, res) => {
	res.send("welcome to paw-locate-api");
});

// routes
const signupRoutes = require("./routes/signup");
app.use("/signup", signupRoutes);

app.listen(port, () => {
	console.log("paw-locate-api launched");
});
