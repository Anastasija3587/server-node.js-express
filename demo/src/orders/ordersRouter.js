const { Router } = require("express");
const { createOrder, getOrder } = require("./ordersController");

const router = Router();

router.post("/orders", createOrder);

router.get("/orders/:id", getOrder)

// router.get("/*", (req, res) => {
//       if (req.params !== "orders" || req.params !== "products" || req.params !== "users") {
//         res.status(404).json("Error!!!404!!!");
//       }
//     });

module.exports = router;
