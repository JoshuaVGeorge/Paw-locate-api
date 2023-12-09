const knex = require("knex")(require("../knexfile"));

const getAllReports = (req, res) => {
	knex("reports")
		.select("*")
		.then((data) => {
			res.status(200).send(data);
		})
		.catch((err) => {
			res.status(500).send(`${err}`);
		});
};

module.exports = {
	getAllReports,
};
