const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reports-controller");

router
	.route("/")
	.get(reportController.getAllReports)
	.post(reportController.createNewReport);

module.exports = router;
