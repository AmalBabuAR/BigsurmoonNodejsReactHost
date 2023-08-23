import mongoose from "mongoose";

const PaymentDataSchema = new mongoose.Schema(
  {},
  {
    timestamps: true,
  },
  { strict: false }
);

const PaymentData = mongoose.model("PaymentData", PaymentDataSchema);

export default PaymentData;
