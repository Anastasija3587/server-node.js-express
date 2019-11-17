const { Router } = require("express");
const { getOrder } = require("./ordersRouter");

const router = Router();

router.post("/order", getOrder);

module.exports = router;
