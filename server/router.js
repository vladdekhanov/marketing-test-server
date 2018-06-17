const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const UserService = require("./services/user.service");
const UserDto = require("./models/User");

const router = express.Router();

router.all("*", cors());
router.put("*", bodyParser.json());

router.get("/user/:id", async (req, res) => {
    UserService.fetchUser(req.params.id).then(user => {
        res.json(user);
    });
});

router.put("/user/:id", async (req, res) => {
    const userDto = new UserDto(req.body.id, req.body.shared, req.body.email);
    UserService.updateUser(userDto).then(() => {
        res.json({});
    });
});

module.exports = router;
