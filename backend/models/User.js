import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: String, required: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

export default User;
