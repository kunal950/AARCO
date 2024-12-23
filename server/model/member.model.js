import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Employee: {
    type: String,
    required: true,
  },
  Unit: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  OfficeIntercom: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["member", "admin"], // Only allows "member" or "admin"
    default: "member", // Sets default value to "member"
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
  },
  otpExpiry: {
    type: Date,
  },
});

const Member = mongoose.model("member", memberSchema);

export default Member; // Exporting the model Member
