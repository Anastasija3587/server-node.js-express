const Orders = require("./schemaOrder");

const createOrder = async (req, res) => {
  try {
    const newOrder = new Orders(req.body);
    const createNewOrder = await newOrder.save();
    res.status(201).json({ status: "success", order: createNewOrder });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getAllOrder = async (req, res) => {
  try {
    const allOrder = await Orders.find({});
    res.status(200).json(allOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getOrder = async (req, res) => {
  try {
    const findOrderById = await Orders.findById(req.params.id);
    res.status(200).json({ status: "success", order: findOrderById });
  } catch {
    res.status(404).json("User was not found!");
  }
};

const updateOrder = async (req, res) => {
  try {
    const body = req.body;
    const orderUpdate = await Orders.findByIdAndUpdate(req.params.id, body, {
      new: true
    });
    res.status(200).json({ status: "success", order: orderUpdate });
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteOrderById = async (req, res) => {
  try {
    await Orders.findById(req.params.id).deleteOne();
    res.status(200).json("Order was deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createOrder,
  getOrder,
  getAllOrder,
  updateOrder,
  deleteOrderById
};
