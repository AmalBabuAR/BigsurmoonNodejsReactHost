import mongoose from "mongoose";

const StripeEventsSchema = new mongoose.Schema(
  {},
  {
    timestamps: true,
  },
  { strict: false }
);

const StripeEvents = mongoose.model("StripeEvents", StripeEventsSchema);

export default StripeEvents;
