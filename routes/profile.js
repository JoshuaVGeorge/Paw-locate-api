const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile-controller");

router
	.route("/:id")
	.get(profileController.authenticate, profileController.getProfile);

router.route("/:id/reports").get(profileController.getProfileReports);

router.route("/:id/tips").get(profileController.getProfileTips);

module.exports = router;
