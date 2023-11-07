const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  numberOfLikes: String,
  description: String
});
productSchema.plugin(timestamp);

const Product = mongoose.model("Product", productSchema );
module.exports = Product;