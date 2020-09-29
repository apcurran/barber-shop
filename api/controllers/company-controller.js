"use strict";

const db = require("../../db/index");
const SQL = require("sql-template-strings");

// GET controllers
async function getAboutUs(req, res, next) {
    res.send("About us info");
}

async function getDescription(req, res, next) {
    try {
        const { rows } = await db.query(SQL`
            SELECT *
            FROM description
        `);

        res.status(200).json(rows[0]);

    } catch (err) {
        next(err);
    }
}

async function getEmployees(req, res, next) {
    try {
        const { rows } = await db.query(SQL`
            SELECT *
            FROM employee
        `);

        res.status(200).json(rows);

    } catch (err) {
        next(err);
    }
}

async function getServices(req, res, next) {
    try {
        const { rows } = await db.query(SQL`
            SELECT *
            FROM service
        `);

        res.status(200).json(rows);

    } catch (err) {
        next(err);
    }
}

// POST controllers
async function postDescription(req, res, next) {
    try {
        const { content } = req.body;
        const newDescription = await db.query(SQL`
            INSERT INTO description (content)
            VALUES (${content})
        `);

        res.status(201).json({ message: "New description created." });

    } catch (err) {
        next(err);
    }
}

async function postEmployee(req, res, next) {
    try {
        const { first_name, last_name, email, skill_level } = req.body;
        const newEmployee = await db.query(SQL`
            INSERT INTO employee (first_name, last_name, email, skill_level)
            VALUES (${first_name}, ${last_name}, ${email}, ${skill_level})
        `);

        res.status(201).json({ message: "New employee created." });

    } catch (err) {
        next(err);
    }
}

async function postService(req, res, next) {
    try {
        const { title, content, price } = req.body;
        const newService = await db.query(SQL`
            INSERT INTO service (title, content, price)
            VALUES (${title}, ${content}, ${price})
        `);

        res.status(201).json({ message: "New service created." });

    } catch (err) {
        next(err);
    }
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