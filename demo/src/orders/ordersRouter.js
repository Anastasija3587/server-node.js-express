const { Router } = require("express");
const { getOrder } = require("./ordersController");

const router = Router();

router.post("/order", getOrder);

module.exports = router;
