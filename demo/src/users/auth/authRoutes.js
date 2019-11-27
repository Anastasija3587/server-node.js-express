const { Router } = require("express");
const { authRegister, authLogin, authCurrent } = require("./authControllers");

const router = Router();

router.post("/register", authRegister);
router.post("/login", authLogin);
router.get("/current", authCurrent);
router.get("/logout");

module.exports = router;
