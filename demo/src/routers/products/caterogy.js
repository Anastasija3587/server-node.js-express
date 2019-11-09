const products = require("../../db/products/all-products.json");
const url = require("url")
const path = require("path")

const findCategory = (req, res) => {
    
    res.writeHead(201, { "Content-Type": "application/json" });
    res.write('!!!!');
    res.end();
 
}

module.exports = findCategory