"use strict";

const express = require("express");
const router = express.Router();
const rateLimit = require("express-rate-limit");

const usersController = require("../controllers/users-controller");
const verifyAuth = require("../middleware/verify-auth");
const verifyAdmin = require("../middleware/verify-admin");

// Rate-limiting setup
const authLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 7,
    message: JSON.stringify({ error: "Too many requests, please try again in a minute." }),
    legacyHeaders: false
});

// APP USER routes
router.post("/signup", authLimiter, usersController.postUserSignup);

router.post("/login", authLimiter, usersController.postUserLogin);

// APP USER appointments //
router.post("/appointments", verifyAuth, usersController.postUserAppointment);

// ADMIN routes
router.post("/admin/signup", authLimiter, usersController.postAdminSignup);

router.post("/admin/login", authLimiter, usersController.postAdminLogin);

router.get("/admin/appointments", verifyAuth, verifyAdmin, usersController.getAdminAppointments);

router.delete("/admin/appointments/:id", verifyAuth, verifyAdmin, usersController.deleteAppointment);

module.exports = router;