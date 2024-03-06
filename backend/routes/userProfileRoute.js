const express = require("express");

const router = express.Router();

const userProfileController = require("../controller/userProfileController");
const authenticateUser = require("../middleware/authenticateUser");

router.post("/login", userProfileController.createUser)
router.post("/signup", userProfileController.login)
router.get("/get", authenticateUser, userProfileController.getUser)


module.exports = router;
