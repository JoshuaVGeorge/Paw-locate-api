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

const createNewReport = (req, res) => {
	const {
		user_id,
		pet_name,
		pet_image,
		description,
		contact_info,
		location_data,
	} = req.body;

	if (
		!user_id ||
		!pet_name ||
		!pet_image ||
		!description ||
		!contact_info ||
		!location_data
	) {
		return res.status(400).send("Please make sure to fill all fields");
	}

	knex("reports")
		.insert(req.body)
		.then((result) => {
			return knex("reports").where({ id: result[0] });
		})
		.then((newReport) => {
			res.status(201).json(newReport);
		})
		.catch((err) => {
			res.status(500).json({ message: `${err}` });
		});
};

const updateReport = (req, res) => {
	const {
		pet_name,
		pet_image,
		description,
		contact_info,
		location_data,
		status,
	} = req.body;

	if (
		!pet_name ||
		!pet_image ||
		!description ||
		!contact_info ||
		!location_data ||
		!status
	) {
		return res.status(400).send("Please make sure to fill all fields");
	}

	knex("reports")
		.where({ id: req.params.id })
		.update(req.body)
		.then(() => {
			return knex("reports").where({
				id: req.params.id,
			});
		})
		.then((updatedReport) => {
			res.json(updatedReport);
		})
		.catch((err) => {
			res.status(500).json({ message: `${err}` });
		});
};

const getReportID = (req, res) => {
	knex("reports")
		.where({ id: req.params.id })
		.then((report) => {
			if (report.length === 0) {
				res
					.status(404)
					.json({ message: `no reports with ID: ${req.params.id} exist` });
			} else {
				res.send(report);
			}
		})
		.catch((err) => {
			res.status(500).json({ message: `${err}` });
		});
};

const getReportTips = (req, res) => {
	knex("tips as t")
		.where({ "t.report_id": req.params.id })
		.join("users as u", "t.user_id", "=", "u.id")
		.select("t.id", "t.text_data", "t.status", "t.image", "u.user_name")
		.then((reports) => {
			if (reports.length === 0) {
				res
					.status(404)
					.json({ message: `no tips with report ID: ${req.params.id} exist` });
			} else {
				res.send(reports);
			}
		})
		.catch((err) => {
			res.status(500).json({ message: `${err}` });
		});
};

module.exports = {
	getAllReports,
	createNewReport,
	updateReport,
	getReportID,
	getReportTips,
};
