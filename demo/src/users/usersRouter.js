const { Router } = require("express");
const { createUser, getId, getAllUsers } = require("./usersControllers");

const router = Router();

router.post("/users", createUser);

router.get("/users", getAllUsers);

router.get("/users/:id", getId);

router.get("/*", (req, res) => {
  if (req.params !== "products" || req.params !== "users") {
    res.status(404).json("Error!!!404!!!");
  }
});

module.exports = router;
