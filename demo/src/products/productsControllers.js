const Products = require("../modules/db/schema/schemaProducts");

const getId = (req, res) => {
  Products.findById(req.params.id).then(product =>{
    res.status(200).json({ status: "success", products: product });

  }).catch(() => res.status(404).json("error: 'products not found'"));
};

const getAllProducts = (req, res) => {
  if (Object.keys(req.query).includes("category")) {
    getCategory(req, res);
  } else if (Object.keys(req.query).includes("ids")) {
    getIds(req, res);
  } else {
    Products.find({}).then(products => {
      res.status(201).json(products);
    }).catch(err=>console.log(err))
  }
};

const getCategory = (req, res) => {
  Products.find({categories : req.query.category}).then(products => {
    res.status(201).json({status:"success", products : products})
  }).catch(() => {
    res.status(400).json("error: 'products not found'");
  })
};

// const getIds = (req, res) => {
//   Products.find({}).then(products => {
//     const prod = products.filter(product => {
//       console.log(req.query.ids)
//       console.log(product._id)
//       req.query.ids.includes(product._id)})
//   console.log(prod)
    
     
//   })
//   // Products.find({_id : })
//   // let arrObj = [];
//   // let userBody;
//   // products.filter(elem => {
//   //   if (req.query.ids.includes(elem.id)) {
//   //     const obj = {
//   //       id: elem.id,
//   //       sku: elem.sku,
//   //       name: elem.name,
//   //       description: elem.description
//   //     };
//   //     arrObj.push(obj);
//   //   }
//   //   if (arrObj.length > 0) {
//   //     userBody = {
//   //       status: "success",
//   //       products: arrObj
//   //     };
//   //   } else {
//   //     userBody = {
//   //       status: "no products",
//   //       products: []
//   //     };
//   //   }
//   // });
//   // res.status(200).json(userBody);
// };

const defaultPage = (req, res) => {
  res.send("Welcome!!!");
};

module.exports = {
  getAllProducts,
  getId,
  getCategory,
  defaultPage
};
