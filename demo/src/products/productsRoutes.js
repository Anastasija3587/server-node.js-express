const { Router } = require("express");
const { getAllProducts, getId, defaultPage } = require("./productsControllers");

const router = Router();

router.get("/products/:id", getId);

router.get("/products", getAllProducts);

router.get("/", defaultPage);

module.exports = router;
