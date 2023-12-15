const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reports-controller");

router
	.route("/")
	.get(reportController.getAllReports)
	.post(reportController.createNewReport);

router
	.route("/:id")
	.get(reportController.getReportID)
	.patch(reportController.updateReport);

router.route("/:id/tips").get(reportController.getReportTips);

module.exports = router;
