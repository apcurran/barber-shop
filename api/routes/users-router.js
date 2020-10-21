"use strict";

const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users-controller");
const verifyAuth = require("../middleware/verify-auth");

// APP USER routes
router.post("/signup", usersController.postUserSignup);

router.post("/login", usersController.postUserLogin);

// APP USER appointments //
router.post("/appointments", verifyAuth, usersController.postUserAppointment);

// ADMIN routes
router.post("/admin/signup", usersController.postAdminSignup);

router.post("/admin/login", usersController.postAdminLogin);

router.get("/admin/appointments", usersController.getAdminAppointments);

router.delete("/admin/appointments/:id", usersController.deleteAppointment);

module.exports = router;