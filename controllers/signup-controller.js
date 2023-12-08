const knex = require("knex")(require("../knexfile"));

// just for testing . remove eventually
const getAllUsers = (req, res) => {
	knex("users as u")
		.select("*")
		.then((data) => {
			res.status(200).send(data);
		})
		.catch((err) => {
			res.status(500).send(`${err}`);
		});
};

const createUser = (req, res) => {};

module.exports = {
	getAllUsers,
};
