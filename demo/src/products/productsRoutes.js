const { Router } = require("express");
const {
  getAllProducts,
  getId,
  updateProduct
} = require("./productsControllers");

const router = Router();

router.get("/:id", getId);
router.get("/", getAllProducts);
router.put("/:id", updateProduct);

module.exports = router;
