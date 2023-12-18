const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const reportController = require("../controllers/reports-controller");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./public/images/reports");
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

const storeTip = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./public/images/tips");
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

const upload = multer({ storage: storage });

const uploadTip = multer({ storage: storeTip });

router
	.route("/")
	.get(reportController.getAllReports)
	.post(upload.single("pet_image"), reportController.createNewReport);

router
	.route("/:id")
	.get(reportController.getReportID)
	.patch(upload.single("pet_image"), reportController.updateReport);

router
	.route("/:id/tips")
	.get(reportController.getReportTips)
	.post(uploadTip.single("image"), reportController.postTip);

module.exports = router;
