const express = require("express");
const router = require("./router");
const settings = require("../settings.json");
const app = express();

app.use("/api", router);

console.log("Preparing to start marketing service...");

app.listen(PORT, () => console.log(`Server is started on ${settings.port} port: \u2713`));
