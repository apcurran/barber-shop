"use strict";

require("dotenv").config();

const path = require("path");
const express = require("express");
const morgan = require("morgan");
const shrinkRay = require("shrink-ray-current");
const PORT = process.env.PORT || 5000;
// Import Routers
const usersRouter = require("./api/routes/users-router");
const companyRouter = require("./api/routes/company-router");

const app = express();

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Middleware
app.use(shrinkRay());
app.use(express.json());
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client", "build")));

// API Routers
app.use("/api/users", usersRouter);
app.use("/api/company", companyRouter);

// General Server Error Handling
app.use((err, req, res, next) => {
    console.error(err.message);

    return res.status(500).json({ error: err.message });
});

// Catch-all handler to send back React's index.html file.
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const server = app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode, and listening on PORT ${PORT}.`));
// WebSockets
const io = require("./socket").init(server);