const products = require("../db/products/all-products.json");

const getId = (req, res) => {
  const idProd = products.find(el => el.id === Number(req.params.id));
  if (idProd) {
    const userBody = {
      status: "success",
      products: idProd
    };
    res.send(userBody);
  } else {
    res.send("Error! 404! Page not found");
  }
};

const getAllProducts = (req, res) => {
  if (Object.keys(req.query).includes("category")) {
    getCategory(req, res);
  } else if (Object.keys(req.query).includes("ids")) {
    getIds(req, res);
  } else {
    res.status(200).json(products);
  }
};

const getCategory = (req, res) => {
  let userBody;
  const arrObj = [];
  const findCat = products.filter(
    el => {
      try {
        return el.categories[0] === JSON.parse(req.query.category)
      } catch(err){
        console.error('Get state error: ', err);
      }
    }
  );

  if (findCat.length > 0) {
    arrObj.push(findCat);

    userBody = {
      status: "success",
      products: arrObj
    };
    res.status(200).json(userBody);
  } else {
    userBody = {
      status: "no products",
      products: []
    };
    res.status(200).json(userBody);
  }
};

const getIds = (req, res) => {
  let arrObj = [];
  let userBody;
  products.filter(elem => {
    if (req.query.ids.includes(elem.id)) {
      const obj = {
        id: elem.id,
        sku: elem.sku,
        name: elem.name,
        description: elem.description
      };
      arrObj.push(obj);
    }
    if (arrObj.length > 0) {
      userBody = {
        status: "success",
        products: arrObj
      };
    } else {
      userBody = {
        status: "no products",
        products: []
      };
    }
  });
  res.status(200).json(userBody);
};

const defaultPage = (req, res) => {
  res.send("Welcome!!!");
};

module.exports = {
  getAllProducts,
  getId,
  getCategory,
  defaultPage
};
