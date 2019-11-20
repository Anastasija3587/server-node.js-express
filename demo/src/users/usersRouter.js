const { Router } = require("express");
const { createUser, getId, getAllUsers, updateUser } = require("./usersControllers");

const router = Router();

router.post("/users", createUser);

router.get("/users", getAllUsers);

router.get("/users/:id", getId);

router.put("/users/:id", updateUser);

// router.get("/*", (req, res) => {
//   if (req.params !== "orders" || req.params !== "products" || req.params !== "users") {
//     res.status(404).json("Error!!!404!!!");
//   }
// });

module.exports = router;
