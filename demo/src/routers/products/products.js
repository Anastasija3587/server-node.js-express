const products = require("../../db/products/all-products.json");
const findId = require("../products/sendProduct")
const url = require("url")
const path = require("path")
const findCategory = require("../products/caterogy")


const prodRoute = (req, res) => {
  if(req.url === "/products"){
  res.writeHead(201, { "Content-Type": "application/json" });
  res.write(JSON.stringify(products));
  res.end();
  } 

  const ids = products.map(el => el.id)
  const id = Number(path.basename(req.url))

  if(ids.includes(id)) {
    findId(req, res)
  }




  /// Почему тут даже, когда втупую ввожу url, оно всё равно выбивает дефолтную страницу
  if(req.url === "/products/?category='drinks'") {
  // if(path.basename(req.url) === "?category='drinks'") {
    findCategory(req, res)
  }
   
  
  
};

module.exports = prodRoute;