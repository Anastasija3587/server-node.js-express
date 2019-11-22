const Products = require("./schemaProducts");

const getId = async (req, res) => {
  try {
    const findProductsById = await Products.findById(req.params.id);
    res.status(200).json({ status: "success", product: findProductsById });
  } catch {
    res.status(404).json("User was not found!");
  }
};

const getAllProducts = async (req, res) => {
  try {
    if (req.query.category) {
      await getCategory(req, res);
    } else if (req.query.ids) {
      await getIds(req, res);
    } else {
      const allProducts = await Products.find({});
      res.status(200).json(allProducts);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const getCategory = async (req, res) => {
  try {
    const productsByCategory = await Products.find({
      categories: req.query.category
    });
    res.status(200).json({ status: "success", products: productsByCategory });
  } catch {
    res.status(400).json("error: 'products not found'");
  }
};

const getIds = async (req, res) => {
  try {
    const productsByIds = await Products.find({});
    const filterById = productsByIds.filter(el =>
      req.query.ids.includes(String(el._id))
    );
    res.status(200).json({ status: "success", products: filterById });
  } catch {
    res.status(400).json("error: 'products not found'");
  }
};

const updateProduct = async (req, res) => {
  try {
    const body = req.body;
    const productUpdate = await Products.findByIdAndUpdate(
      req.params.id,
      body,
      {
        new: true
      }
    );
    res.status(200).json({ status: "success", product: productUpdate });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllProducts,
  getId,
  updateProduct
};
