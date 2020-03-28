const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const expenses = new Schema({
  name: String,
  totalAmount:Number,
  type:String,
  paidAmount:Number,
  tag:String,
  installment:Number
});

module.exports = mongoose.model("Expenses", expenses);
