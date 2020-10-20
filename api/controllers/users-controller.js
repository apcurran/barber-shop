"use strict";

const db = require("../../db/index");
const SQL = require("sql-template-strings");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { signupValidation, loginValidation, adminSignupValidation } = require("../validation/users-validation");

// POST controllers
async function postUserSignup(req, res, next) {
    try {
        await signupValidation(req.body);

    } catch (err) {
        return res.status(400).json({ error: err.details[0].message });
    }

    try {
        // Data valid, now reject creating an existing user.
        const { first_name, last_name, email, phone_number, password } = req.body;
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
        await db.query(SQL`
            INSERT INTO app_user (first_name, last_name, email, phone_number, password)
            VALUES (${first_name}, ${last_name}, ${email}, ${phone_number}, ${hashedPassword})
        `);

        res.status(201).json({ message: "New user created." });

    } catch (err) {
        next(err);
    }
}

async function postUserLogin(req, res, next) {
    try {
        await loginValidation(req.body);

    } catch (err) {
        return res.status(400).json({ error: err.details[0].message });
    }

    try {
        // Validation passed, now check for an existing email.
        const { email, password } = req.body;
        const userResult = await db.query(SQL`
            SELECT app_user.user_id, app_user.password
            FROM app_user
            WHERE app_user.email = ${email}
        `);
        const user = userResult.rows[0];

        if (user.length === 0) {
            return res.status(400).json({ error: "Email is not found." });
        }

        // Validate password.
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).json({ error: "Invalid password." });
        }

        // Create and send token.
        const token = jwt.sign({ _id: user.user_id }, process.env.TOKEN_SECRET, { expiresIn: "3h" });

        res.status(200).json({ accessToken: token });

    } catch (err) {
        next(err);
    }
}

async function postUserAppointment(req, res, next) {
    try {
        const userId = req.user._id;
        const currentUser = await db.query(SQL`
            SELECT app_user.first_name, app_user.last_name, app_user.phone_number
            FROM app_user
            WHERE app_user.user_id = ${userId}
        `);
        const currentUserData = currentUser.rows[0];

        // Add new appointment for user into db.
        const bookedAppointment = await db.query(SQL`
            INSERT INTO appointment (first_name, last_name, phone_number, user_id)
            VALUES (${currentUserData.first_name}, ${currentUserData.last_name}, ${currentUserData.phone_number}, ${userId})
        `);
        console.log(bookedAppointment);

        res.status(201).json({ message: "New appointment created." });

    } catch (err) {
        next(err);
    }
}

// ADMIN
async function postAdminSignup(req, res, next) {
    try {
        if (req.body.admin_secret !== process.env.ADMIN_SECRET) {
            return res.status(403).json({ error: "Invalid credentials provided." });
        }

        await adminSignupValidation(req.body);

    } catch (err) {
        return res.status(400).json({ error: err.details[0].message });
    }

    try {
        // Data valid, now reject creating an existing admin.
        const { email, password } = req.body;
        const emailExists = await db.query(SQL`
            SELECT app_admin.admin_id
            FROM app_admin
            WHERE app_admin.email = ${email}
        `);

        if (emailExists.rows.length > 0) {
            return res.status(400).json({ error: "Email already exists." });
        }

        // Hash password.
        const saltRounds = 12;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Add new admin to db.
        const admin = await db.query(SQL`
            INSERT INTO app_admin (email, password)
            VALUES (${email}, ${hashedPassword})
        `);

        res.status(201).json({ message: "New admin created." });

    } catch (err) {
        next(err);
    }  
}

async function postAdminLogin(req, res, next) {
    try {
        await loginValidation(req.body);

    } catch (err) {
        return res.status(400).json({ error: err.details[0].message });
    }

    try {
        // Validation passed, now check for an existing email.
        const { email, password } = req.body;
        const adminResult = await db.query(SQL`
            SELECT app_admin.admin_id, app_admin.password
            FROM app_admin
            WHERE app_admin.email = ${email}
        `);
        const admin = adminResult.rows[0];

        if (admin.length === 0) {
            return res.status(400).json({ error: "Email is not found." });
        }

        // Validate password.
        const validPassword = await bcrypt.compare(password, admin.password);

        if (!validPassword) {
            return res.status(400).json({ error: "Invalid password." });
        }

        // Create and send token.
        const token = jwt.sign({ _id: admin.admin_id }, process.env.TOKEN_SECRET, { expiresIn: "3h" });

        res.status(200).json({ accessToken: token });

    } catch (err) {
        next(err);
    }
}

module.exports = {
    postUserLogin,
    postUserSignup,
    postUserAppointment,
    postAdminSignup,
    postAdminLogin,
};