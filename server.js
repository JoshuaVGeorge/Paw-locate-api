const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const jwt = require("jsonwebtoken");

require("dotenv").config();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
	res.send("welcome to paw-locate-api");
});

// routes
const signupRoutes = require("./routes/signup");
app.use("/signup", signupRoutes);

const reportRoutes = require("./routes/reports");
app.use("/reports", reportRoutes);

const profileRoutes = require("./routes/profile");
app.use("/profile", profileRoutes);

app.listen(port, () => {
	console.log("paw-locate-api launched");
});
