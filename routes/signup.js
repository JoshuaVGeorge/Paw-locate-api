const express = require("express");
const router = express.Router();
const usersController = require("../controllers/signup-controller");

router.route("/").get(usersController.getAllUsers);

module.exports = router;
