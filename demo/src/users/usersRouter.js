const { Router } = require("express");
const {
  getId,
  getAllUsers,
  updateUser,
  deleteUserById
} = require("./usersControllers");

const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getId);
router.put("/:id", updateUser);
router.delete("/:id", deleteUserById);

module.exports = router;
