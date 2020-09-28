"use strict";

// GET controllers
async function getAboutUs(req, res, next) {
    res.send("About us info");
}

async function getDescription(req, res, next) {
    res.send("Description info");
}

async function getEmployees(req, res, next) {
    res.send("Employees info");
}

async function getServices(req, res, next) {
    res.send("Services info");
}

// POST controllers
async function postDescription(req, res, next) {
    res.send("Created description");
}

async function postEmployee(req, res, next) {
    res.send("Created employee");
}

async function postService(req, res, next) {
    res.send("Created service");
}

// PATCH controllers
async function patchDescription(req, res, next) {
    res.send("Updated description");
}

async function patchEmployee(req, res, next) {
    res.send("Updated employee");
}

async function patchService(req, res, next) {
    res.send("Updated service");
}

// DELETE controllers
async function deleteEmployee(req, res, next) {
    res.send(`Deleted employee ${req.params.id}`);
}

async function deleteService(req, res, next) {
    res.send(`Deleted service ${req.params.id}`);
}

module.exports = {
    getAboutUs,
    getDescription,
    getEmployees,
    getServices,
    postDescription,
    postEmployee,
    postService,
    patchDescription,
    patchEmployee,
    patchService,
    deleteEmployee,
    deleteService,
};