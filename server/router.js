const express = require("express");
//const moviesService = require("./services/movies-service");
const router = express.Router();

router.post("/fetch-user", async (req, res) => {
    res.send("Working!");
});

module.exports = router;
