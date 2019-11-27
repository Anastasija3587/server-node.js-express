const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../modules/db/middleware/timestamp");

const productSchema = new Schema({
  sku: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  creatorId: {
    type: Number,
    required: true
  },
  categories: {
    type: Array,
    required: true
  },
  ingredients: [
    { type: Schema.Types.ObjectId, ref: "Ingredient" }
  ],
  likes: Number
});

productSchema.plugin(timestamp);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
