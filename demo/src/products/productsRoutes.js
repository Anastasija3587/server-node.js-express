const { Router } = require("express");
const {
  getAllProducts,
  getId,
  updateProduct,
  createProducts,
  deleteProductById
} = require("./productsControllers");

const router = Router();

router.get("/:id", getId);
router.get("/", getAllProducts);
router.put("/:id", updateProduct);
router.post("/", createProducts);
router.delete("/:id", deleteProductById);

module.exports = router;
