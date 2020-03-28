const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const expenses = new Schema({
  name: String,
  totalAmount:Number,
  paidAmount:Number,
  tag:String,
  userId:String
});

module.exports = mongoose.model("Expenses", expenses);
