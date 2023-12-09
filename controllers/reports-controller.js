const knex = require("knex")(require("../knexfile"));

const getAllReports = (req, res) => {
	res.send("welcome to reports");
};

module.exports = {
	getAllReports,
};
