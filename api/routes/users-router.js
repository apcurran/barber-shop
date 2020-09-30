"use strict";

const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users-controller");

// APP USER routes
router.post("/signup", usersController.postUserSignup);

router.post("/login", usersController.postUserLogin);

// ADMIN routes
router.post("/admin/signup", usersController.postAdminSignup);

router.post("/admin/login", usersController.postAdminLogin);

// TODO user appointments //


module.exports = router;