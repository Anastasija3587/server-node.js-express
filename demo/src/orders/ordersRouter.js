const { Router } = require("express");
const {
  createOrder,
  getOrder,
  getAllOrder,
  updateOrder,
  deleteOrderById
} = require("./ordersController");

const router = Router();

router.post("/", createOrder);
router.get("/", getAllOrder);
router.get("/:id", getOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrderById);

module.exports = router;
