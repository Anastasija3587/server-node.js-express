const Products = require("./schemaProducts");

const getId = (req, res) => {
  Products.findById(req.params.id)
    .then(product => {
      res.status(200).json({ status: "success", products: product });
    })
    .catch(() => res.status(404).json("error: 'products not found'"));
};

const getAllProducts = (req, res) => {
  if (req.query.category) {
    getCategory(req, res);
  } else if (req.query.ids) {
    getIds(req, res);
  } else {
    Products.find({})
      .then(products => {
        res.status(200).json(products);
      })
      .catch(err => res.status(500).json(err));
  }
};

const getCategory = (req, res) => {
  Products.find({ categories: req.query.category })
    .then(products => {
      res.status(200).json({ status: "success", products: products });
    })
    .catch(() => {
      res.status(400).json("error: 'products not found'");
    });
};

const getIds = (req, res) => {
  Products.find({})
    .then(products => {
      const filterById = products.filter(el =>
        req.query.ids.includes(String(el._id))
      );
      res.status(200).json({ status: "success", products: filterById });
    })
    .catch(() => {
      res.status(400).json("error: 'products not found'");
    });
};

const updateProduct = (req, res) => {
  const body = req.body;
  const id = req.params.id;
  Products.findByIdAndUpdate(id, body, { new: true })
    .then(product => {
      const productBoby = {
        status: "success",
        product: product
      };
      res.status(200).json(productBoby);
    })
    .catch(err => res.status(500).json(err));
};

module.exports = {
  getAllProducts,
  getId,
  updateProduct
};
