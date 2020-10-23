"use strict";

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.header("Authorization");
    const token = authHeader && authHeader.split(" ")[1];
    // Check if admin
    const adminHeader = req.header("Admin");

    if (!token) {
        return res.status(401).json({ error: "Access denied." });
    }

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        console.error(err);

        if (err) {
            return res.status(403).json({ error: "Invalid token." });
        }

        // isAdmin
        if (adminHeader) {
            req.admin = true;
        }
        // Validation passed
        req.user = user;
        next();
    });
};