const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const reportController = require("../controllers/reports-controller");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./public/images");
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

const upload = multer({ storage: storage });

router
	.route("/")
	.get(reportController.getAllReports)
	.post(upload.single("pet_image"), reportController.createNewReport);

router
	.route("/:id")
	.get(reportController.getReportID)
	.patch(upload.single("pet_image"), reportController.updateReport);

router.route("/:id/tips").get(reportController.getReportTips);

module.exports = router;
