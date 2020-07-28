const mongoose = require("mongoose");
const {Schema} = mongoose
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.method('encryptPassword',async function(password){
  const salt = await bcrypt.genSalt(5);
  const hash = bcrypt.hash(password, salt);
  return hash;
});

UserSchema.method('comparePassword',async function (password){
  return await bcrypt.compare(password, this.password)
});

UserSchema

module.exports = mongoose.model("User", UserSchema);