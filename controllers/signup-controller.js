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

const isNotUser = (req, res, next) => {
	knex("users")
		.where({ user_name: req.body.username })
		.then((user) => {
			if (user.length === 0) {
				next();
			} else {
				return res.status(403).json({ message: "username already exists" });
			}
		});
};

const createUser = (req, res) => {
	const { username, password } = req.body;
	knex("users")
		.insert(req.body)
		.then((result) => {
			console.log(`profile created ${result}`);
			res.status(201).json(req.body);
		})
		.catch(() => {
			res.status(500);
		});
};

module.exports = {
	getAllUsers,
	createUser,
	isNotUser,
};
