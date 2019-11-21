const { Router } = require("express");
const {
  createOrder,
  getOrder,
  getAllOrder,
  updateOrder
} = require("./ordersController");

const router = Router();

router.post("/", createOrder);
router.get("/", getAllOrder);
router.get("/:id", getOrder);
router.put("/:id", updateOrder);

module.exports = router;
