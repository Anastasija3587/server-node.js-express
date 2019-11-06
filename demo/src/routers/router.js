const mainRoute = require("./main/main");
const prodRoute = require("./products/products");
const signUp = require("./signUp/signUp");

const router = {
  "/signup": signUp,
  "/products": prodRoute,
  default: mainRoute
};

module.exports = router;
