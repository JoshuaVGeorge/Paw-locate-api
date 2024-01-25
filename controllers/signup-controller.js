const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcrypt");

const isNotUser = (req, res, next) => {
	knex("users")
		.where({ user_name: req.body.user_name })
		.then((user) => {
			if (user.length === 0) {
				next();
			} else {
				return res.status(403).send("username already exists");
			}
		});
};

const createUser = (req, res) => {
	const hashedPass = bcrypt.hashSync(req.body.password, 10);
	const newUser = {
		user_name: req.body.user_name,
		password: hashedPass,
	};
	knex("users")
		.insert(newUser)
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
	createUser,
	isNotUser,
};
