"use strict";

const express = require("express");
const router = express.Router();

const companyController = require("../controllers/company-controller");
const verifyAuth = require("../middleware/verify-auth");

router.get("/about-us", companyController.getAboutUs);

router.get("/description", companyController.getDescription);

router.get("/employees", companyController.getEmployees);

router.get("/services", companyController.getServices);

router.post("/description", verifyAuth, companyController.postDescription);

router.post("/employees", verifyAuth, companyController.postEmployee);

router.post("/services", verifyAuth, companyController.postService);

router.patch("/description", verifyAuth, companyController.patchDescription);

router.patch("/employees/:id", verifyAuth, companyController.patchEmployee);

router.patch("/services/:id", verifyAuth, companyController.patchService);

router.delete("/employees/:id", verifyAuth, companyController.deleteEmployee);

router.delete("/services/:id", verifyAuth, companyController.deleteService);

module.exports = router;