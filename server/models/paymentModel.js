import mongoose from "mongoose";

const PaymentDataSchema = new mongoose.Schema(
  {},
  { strict: false, timestamps: true }
);

const PaymentData = mongoose.model("PaymentData", PaymentDataSchema);

export default PaymentData;
