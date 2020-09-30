"use strict";

const express = require("express");
const router = express.Router();

const companyController = require("../controllers/company-controller");
const verifyAuth = require("../middleware/verify-auth");

router.get("/about-us", companyController.getAboutUs);

router.get("/description", companyController.getDescription);

router.get("/employees", companyController.getEmployees);

router.get("/services", companyController.getServices);

router.post("/description", companyController.postDescription);

router.post("/employees", companyController.postEmployee);

router.post("/services", companyController.postService);

router.patch("/description", companyController.patchDescription);

router.patch("/employees/:id", companyController.patchEmployee);

router.patch("/services/:id", companyController.patchService);

router.delete("/employees/:id", companyController.deleteEmployee);

router.delete("/services/:id", companyController.deleteService);

module.exports = router;