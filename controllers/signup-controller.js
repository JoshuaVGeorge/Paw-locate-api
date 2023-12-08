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
		.where({ user_name: req.body.user_name })
		.then((user) => {
			if (user.length === 0) {
				next();
			} else {
				return res.status(403).json({ message: "username already exists" });
			}
		});
};

const createUser = (req, res) => {
	console.log(req.body);
	knex("users")
		.insert(req.body)
		.then((result) => {
			console.log(`profile created id:${result}`);
			return knex("users").where({ id: result[0] });
		})
		.then((newUser) => {
			res.status(201).json(newUser);
			return newUser;
		})
		.catch((err) => {
			res.status(500).send(`${err}`);
		});
};

module.exports = {
	getAllUsers,
	createUser,
	isNotUser,
};
