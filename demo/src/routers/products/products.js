const products = require("../../db/products/all-products.json");

const prodRoute = (request, response) => {
  response.writeHead(201, { "Content-Type": "application/json" });
  response.write(JSON.stringify(products));
  response.end();
};

module.exports = prodRoute;
