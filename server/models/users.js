const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: String,
  birthday: String,
  city:String,
  password:String,
  profilePic:String,
  bio:String,
  salary:Number,
  updatedSalary:Number,
  status:Number
});

module.exports = mongoose.model("Users", usersSchema);
