"use strict";

const path = require("path");
const express = require("express");
const helmet = require("helmet");
const PORT = process.env.PORT || 5000;
// Import Routers
const usersRouter = require("./api/routes/users-router");
const companyRouter = require("./api/routes/company-router");

const app = express();

if (process.env.NODE_ENV === "development") {
  const morgan = require("morgan");

  app.use(morgan("dev"));
}

// reduce fingerprinting
app.disable("x-powered-by");

// Middleware
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  }),
);
app.use(express.json());
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client", "build")));

// API Routers
app.use("/api/users", usersRouter);
app.use("/api/company", companyRouter);

// General Server Error Handling
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err.message);

  return res.status(500).json({ error: err.message });
});

// Catch-all handler to send back React's index.html file.
app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const server = app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode, and listening on PORT ${PORT}.`,
  ),
);
// WebSockets
require("./socket").init(server);
