const { Router } = require("express");
const { createOrder, getOrder } = require("./ordersController");

const router = Router();

router.post("/orders", createOrder);

router.get("/orders/:id", getOrder)

module.exports = router;
