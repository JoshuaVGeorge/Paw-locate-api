const knex = require("knex")(require("../knexfile"));

const getProfileReports = (req, res) => {
	knex("reports")
		.where({ user_id: req.params.id })
		.then((reports) => {
			if (reports.length === 0) {
				res
					.status(404)
					.json({ message: `no reports with user ID: ${req.params.id} exist` });
			} else {
				res.send(reports);
			}
		})
		.catch((err) => {
			res.status(500).json({ message: `${err}` });
		});
};

module.exports = {
	getProfileReports,
};
