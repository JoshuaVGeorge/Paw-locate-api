const knex = require("knex")(require("../knexfile"));
require("dotenv").config();

const ApiUrl = process.env.API_URL;

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
	const { user_id, pet_name, description, location_data } = req.body;

	if (!user_id || !pet_name || !description || !location_data || !req.file) {
		return res.status(400).send("Please make sure to fill all fields");
	}

	const newReport = {
		user_id: user_id,
		pet_name: pet_name,
		pet_image: `${ApiUrl}/images/${req.file.filename}`,
		description: description,
		location_data: location_data,
		contact_info: "none",
		status: 0,
	};

	knex("reports")
		.insert(newReport)
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
	const { pet_name, description, location_data } = req.body;

	if (!pet_name || !description || !location_data || !req.file) {
		return res.status(400).send("Please make sure to fill all fields");
	}

	const newReport = {
		pet_name: pet_name,
		pet_image: `${ApiUrl}/images/${req.file.filename}`,
		description: description,
		location_data: location_data,
		contact_info: "none",
		status: 0,
	};

	knex("reports")
		.where({ id: req.params.id })
		.update(newReport)
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
			res.send(reports);
		})
		.catch((err) => {
			res.status(500).json({ message: `${err}` });
		});
};

const postTip = (req, res) => {
	const { reportId, userId, text_data } = req.body;
	let imgURL = "no image";

	if (!text_data) {
		return res.status(400).send("Please fill text field");
	}

	if (req.file) {
		imgURL = `${ApiUrl}/images/tips/${req.file.filename}`;
	}

	const newTip = {
		report_id: reportId,
		user_id: userId,
		text_data: text_data,
		image: imgURL,
		status: 0,
	};

	knex("tips")
		.insert(newTip)
		.then((result) => {
			return knex("tips").where({ id: result[0] });
		})
		.then((newTip) => {
			res.status(201).json(newTip);
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
	postTip,
};
