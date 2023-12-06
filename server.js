const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("welcome to paw-locate-api");
});

app.listen(8080, () => {
	console.log("paw-locate-api launched");
});
