"use strict";

const db = require("../../db/index");
const SQL = require("sql-template-strings");
const bcrypt = require("bcrypt");

const { signupValidation, loginValidation } = require("../validation/users-validation");

// GET controllers
async function postUserLogin(req, res, next) {
    try {


    } catch (err) {
        next(err);
    }
}

// POST controllers
async function postUserSignup(req, res, next) {
    // TODO Validate incoming data
    try {
        await signupValidation(req.body);

    } catch (err) {
        return res.status(400).json({ error: err.details[0].message });
    }

    try {
        const { email, password } = req.body;
        // Reject creating an existing user.
        const emailExists = await db.query(SQL`
            SELECT app_user.user_id
            FROM app_user
            WHERE app_user.email = ${email}
        `);

        if (emailExists.rows.length > 0) {
            return res.status(400).json({ error: "Email already exists." });
        }

        // Hash password.
        const saltRounds = 12;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Add new user to db.
        const user = await db.query(SQL`
            INSERT INTO app_user (email, password)
            VALUES (${email}, ${hashedPassword})
        `);

        res.status(201).json({ message: "New user created." });

    } catch (err) {
        next(err);
    }
}


// PATCH controllers



// DELETE controllers


module.exports = {
    postUserLogin,
    postUserSignup,
};