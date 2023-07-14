import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";

const env = dotenv.config();

//stripe config
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST, {
  apiVersion: "2020-08-27",
  appInfo: {
    // For sample support and debugging, not required for production:
    name: "stripe-samples/accept-a-payment/payment-element",
    version: "0.0.2",
    url: "https://github.com/stripe-samples",
  },
});

const stripeRouter = express.Router();

stripeRouter.get("/config", (req, res) => {
  console.log("req in config",req.body);
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY_TEST,
  });
});

stripeRouter.get("/create-payment-intent", async (req, res) => {
  console.log("req in create-payment_intent",req.body);
  // Create a PaymentIntent with the amount, currency, and a payment method type.
  //
  // See the documentation [0] for the full list of supported parameters.
  //
  // [0] https://stripe.com/docs/api/payment_intents/create
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "INR",
      amount: 100,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    console.log("errore", e.message);
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});
// stripeRouter.get("/create-payment-intent", async (req, res) => {
//     console.log("req in create-payment_intent");
//     // Create a PaymentIntent with the amount, currency, and a payment method type.
//     //
//     // See the documentation [0] for the full list of supported parameters.
//     //
//     // [0] https://stripe.com/docs/api/payment_intents/create
//     try {
//         const subscription = await stripe.subscriptions.create({
//             customer: '12345',
//             items: [
//               {
//                 price: 10000,
//               },
//             ],
//             trial_end: 1610403705,
//           });
  
//       // Send publishable key and PaymentIntent details to client
//       res.send({
//         clientSecret: paymentIntent.client_secret,
//       });
//     } catch (e) {
//       console.log("errore", e.message);
//       return res.status(400).send({
//         error: {
//           message: e.message,
//         },
//       });
//     }
//   });
  




export default stripeRouter;