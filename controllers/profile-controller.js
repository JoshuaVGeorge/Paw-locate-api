const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");
require("dotenv").config();

const bcrypt = require("bcrypt");

const secretKey = process.env.SECRET_KEY;

const authenticate = (req, res, next) => {
	// fix the nested if statments
	knex("users as u")
		.where({ "u.user_name": req.body.user_name })
		.select("*")
		.then((profile) => {
			if (profile.length === 0) {
				console.log("no user");
				res.status(403).json({ message: "username and password do not match" });
			} else {
				bcrypt.compare(
					req.body.password,
					profile[0].password,
					(err, result) => {
						if (result) {
							next();
						} else {
							console.log("wrong pass");
							res.status(403).json({
								message: "username and password do not match",
								token: null,
							});
						}
					}
				);
			}
		});
};

const getProfile = (req, res) => {
	knex("users as u")
		.where({ "u.user_name": req.body.user_name })
		.select("u.id", "u.user_name")
		.then((profile) => {
			let token = jwt.sign({ user_name: req.body.user_name }, secretKey);
			res.json({ token: token, profile: profile });
		});
};

const getProfileReports = (req, res) => {
	knex("reports as r")
		.where({ "r.user_id": req.params.id })
		.select("r.id", "r.pet_name", "r.status")
		.then((reports) => {
			if (reports.length === 0) {
				res.json({
					message: `no reports with user ID: ${req.params.id} exist`,
					data: [],
				});
			} else {
				res.send(reports);
			}
		})
		.catch((err) => {
			res.status(500).json({ message: `${err}` });
		});
};

const getProfileTips = (req, res) => {
	knex("tips as t")
		.where({ "t.user_id": req.params.id })
		.select("t.id", "t.text_data", "t.status", "t.image")
		.then((tips) => {
			res.send(tips);
		})
		.catch((err) => {
			res.status(500).json({ message: `${err}` });
		});
};

module.exports = {
	getProfile,
	getProfileReports,
	getProfileTips,
	authenticate,
};
