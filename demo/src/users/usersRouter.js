const { Router } = require("express");
const { createUser, getId, getAllUsers } = require("./usersControllers");

const router = Router();

router.post("/users", createUser);

router.get("/users", getAllUsers);

router.get("/users/:id", getId);

router.get("/:notfound", (req, res) => {
  if (req.params.notfound !== "products" || req.params.notfound !== "users") {
    res.status(404).json("Error!!!404!!!");
  }
});

module.exports = router;
