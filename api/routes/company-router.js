"use strict";

const express = require("express");
const router = express.Router();

const companyController = require("../controllers/company-controller");
const verifyAuth = require("../middleware/verify-auth");
const verifyAdmin = require("../middleware/verify-admin");

router.get("/about-us", companyController.getAboutUs);

router.get("/description", companyController.getDescription);

router.get("/employees", companyController.getEmployees);

router.get("/services", companyController.getServices);

router.post("/description", verifyAuth, verifyAdmin, companyController.postDescription);

router.post("/employees", verifyAuth, verifyAdmin, companyController.postEmployee);

router.post("/services", verifyAuth, verifyAdmin, companyController.postService);

router.patch("/description", verifyAuth, verifyAdmin, companyController.patchDescription);

router.patch("/employees/:id", verifyAuth, verifyAdmin, companyController.patchEmployee);

router.patch("/services/:id", verifyAuth, verifyAdmin, companyController.patchService);

router.delete("/employees/:id", verifyAuth, verifyAdmin, companyController.deleteEmployee);

router.delete("/services/:id", verifyAuth, verifyAdmin, companyController.deleteService);

module.exports = router;