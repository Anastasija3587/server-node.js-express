const { Router } = require("express");
const {
  createUser,
  getId,
  getAllUsers,
  updateUser
} = require("./usersControllers");

const router = Router();

router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getId);
router.put("/:id", updateUser);

module.exports = router;
