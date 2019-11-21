const Orders = require("./schemaOrder");

const createOrder = (req, res) => {
  const order = req.body;
  const newOrder = new Orders(order);

  newOrder
    .save()
    .then(order => {
      res.status(201).json({ status: "success", order: order });
    })
    .catch(() => {
      res.status(400).json("error: 'order was not saved'");
    });
};

const getAllOrder = (req, res) => {
  Orders.find({})
    .then(orders => res.status(200).json(orders))
    .catch(err => res.status(500).json(err));
};

const getOrder = (req, res) => {
  Orders.findById(req.params.id)
    .then(order => {
      res.status(200).json({ status: "success", order: order });
    })
    .catch(() => res.status(404).json("error: 'order was not found'"));
};

const updateOrder = (req, res) => {
  const body = req.body;
  const id = req.params.id;
  Orders.findByIdAndUpdate(id, body, { new: true })
    .then(order => {
      const orderBoby = {
        status: "success",
        order: order
      };
      res.status(200).json(orderBoby);
    })
    .catch(err => res.status(500).json(err));
};

module.exports = { createOrder, getOrder, getAllOrder, updateOrder };
