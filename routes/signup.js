const express = require("express");
const router = express.Router();
const signupController = require("../controllers/signup-controller");

router.route("/").post(signupController.isNotUser, signupController.createUser);

module.exports = router;
