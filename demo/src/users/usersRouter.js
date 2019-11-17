const { Router } = require("express");
const { createUser, getId } = require("./usersControllers");

const router = Router();

router.post("/users", createUser);

router.get("/users/:id", getId);

module.exports = router;
