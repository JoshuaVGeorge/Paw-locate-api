const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reports-controller");

router
	.route("/")
	.get(reportController.getAllReports)
	.post(reportController.createNewReport)
	.patch(reportController.updateReport);

router.route("/:id").get(reportController.getProfileReports);

module.exports = router;
