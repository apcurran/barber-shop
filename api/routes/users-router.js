"use strict";

const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users-controller");

router.post("/login", usersController.postUserLogin);

router.post("/signup", usersController.postUserSignup);


module.exports = router;