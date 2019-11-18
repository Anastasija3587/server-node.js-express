const products = require("../db/products/all-products.json");
const users = require("../db/users/all-users.json");
const fs = require("fs");
const path = require("path");

const getOrder = (req, res) => {
  const { id, deliveryType, deliveryAdress } = req.body;
  const fileOrders = path.join(
    __dirname,
    "../",
    "db/",
    "users/",
    "orders.json"
  );

  const arr = [];
  fs.readFile(fileOrders, (err, data) => {
    if (err) {
      throw err;
    }
    if (data.length > 0) {
      JSON.parse(data).forEach(el => {
        arr.push(el);
      });
      arr.push(req.body);
      fs.writeFile(fileOrders, JSON.stringify(arr), err => {
        if (err) {
          throw err;
        }
      });
    } else {
      const arrOrd = [];
      arrOrd.push(req.body);
      fs.writeFile(fileOrders, JSON.stringify(arrOrd), err => {
        if (err) {
          throw err;
        }
      });
    }
  });
  const idUser = req.body.user;
  const userName = users.find(el => el.id === +idUser);
  const orderedProds = req.body.products;
  const arrOrderedProdName = [];
  orderedProds.map(elem => {
    const prod = products.find(el => el.id === +elem);
    arrOrderedProdName.push(prod.name);
  });
  const body = {
    id,
    user: userName.username,
    products: arrOrderedProdName,
    deliveryType,
    deliveryAdress
  };
  const userBody = {
    status: "success",
    user: body
  };
  res.status(200).json(userBody);
};

module.exports = { getOrder };
