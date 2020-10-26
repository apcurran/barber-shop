"use strict";

module.exports = (req, res, next) => {
    if (!req.user.isAdmin) {
        return res.status(403).json({ error: "Only admin access allowed." });
    }

    next();
};