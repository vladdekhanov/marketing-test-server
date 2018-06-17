const express = require("express");
const router = require("./router");
const settings = require("../settings.json");
const { initDb } = require("../db/db");
const app = express();

app.use("/api", router);
initDb();

console.log("Preparing to start marketing service...");

app.listen(settings.port, () => console.log(`Server is started on ${settings.port} port: \u2713`));
