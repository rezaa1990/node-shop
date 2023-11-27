const { truncate } = require('lodash');
const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');


const orderSchema = new mongoose.Schema({
  FName: { type: String,},
  LName: { type: String,},
  mobile: { type: Number,},
  email: { type: String, required: true, unique: true},
  address: { type: String,},
  postalCode: { type: Number,},
  products:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product"
  }],
  sendToPost:{type:Boolean,default:false},
  payment:{type:Boolean,default:false},
});
orderSchema.plugin(timestamp);

const Order = mongoose.model("Order", orderSchema );
module.exports = Order;