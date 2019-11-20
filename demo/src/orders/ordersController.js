const Orders = require("../modules/db/schema/schemaOrder");

const createOrder = (req, res) => {
  const order = req.body;

  const newOrder = new Orders(order);

  newOrder
    .save()
    .then(order => {
      res.status(201).json({ status: "success", order: order });
    })
    .catch(() => {
      res.status(400).json("error: 'order did not saved'");
    });
};

const getOrder = (req, res) => {
  Orders.findById(req.params.id)
    .then(order => {
      res.status(200).json({ status: "success", order: order });
    })
    .catch(() => res.status(404).json("error: 'order not found'"));
};

module.exports = { createOrder, getOrder };
