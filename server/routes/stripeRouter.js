import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";

const env = dotenv.config();

//stripe config
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST);

const stripeRouter = express.Router();

stripeRouter.get("/config", (req, res) => {
  console.log("req in config", req.body);
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY_TEST,
  });
});

stripeRouter.get("/create-payment-intent", async (req, res) => {
  console.log("req in create-payment_intent", req.body);
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

stripeRouter.post("/create-checkout-sessionff", async (req, res) => {
  console.log(req.body);
  
  const { values, prices } = req.body;
  const priceId = "price_1NbGsnSDf73R9RBmaGRZNkwb";

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: values,
          },
          unit_amount: prices,
          // For metered billing, do not pass
        },
        quantity: 100,
      },
    ],
    subscription_data: {
      trial_period_days: 7,
    },

    // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
    // the actual Session ID is returned in the query parameter when your customer
    // is redirected to the success page.
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}`,
  });
  res.json({ url: session.url });
});

stripeRouter.post("/create-checkout-session", async (req, res) => {
  const user = req.user._id;
  console.log(req.body, user);
  const { price, sliderValue } = req.body;
  const priceId = "price_1NbGsnSDf73R9RBmaGRZNkwb";
  const priceId2 = 'price_1NhcZUSDf73R9RBmUcNDgfFI'

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [
      {
        quantity: sliderValue,
        price: priceId2,
      },
    ],
    subscription_data: {
      trial_period_days: 7,
    },
    metadata: {
      user: user,
      quantity: sliderValue,
      price: price,
    },
    // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
    // the actual Session ID is returned in the query parameter when your customer
    // is redirected to the success page.
    
    success_url: `${process.env.CLIENT_URL}/checkoutSuccess`,
    cancel_url: `${process.env.CLIENT_URL}/checkoutFailed`,
  });
  console.log("session---------------", session);
  console.log("respons--------------", res);

  res.json({ url: session.url });
});




export default stripeRouter;
