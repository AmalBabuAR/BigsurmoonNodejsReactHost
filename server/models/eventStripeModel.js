import mongoose from "mongoose";

const StripeEventsSchema = new mongoose.Schema(
  {},
  { strict: false, timestamps: true }
);

const StripeEvents = mongoose.model("StripeEvents", StripeEventsSchema);

export default StripeEvents;
