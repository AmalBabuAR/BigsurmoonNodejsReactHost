import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import PaymentData from "../models/paymentModel.js";

const env = dotenv.config();

//stripe config
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const stripeRouter = express.Router();

stripeRouter.get("/config", (req, res) => {
  console.log("req in config", req.body);
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

stripeRouter.post("/create-checkout-session", async (req, res) => {
  const user = req.user._id;
  // console.log(req.body, user);
  const { priceDetails, checkyear } = req.body;
  // const priceId = "price_1NbGsnSDf73R9RBmaGRZNkwb";
  // const priceId2 = "price_1NhcZUSDf73R9RBmUcNDgfFI";
  try {
    if (user) {
      const checkUser = await PaymentData.findOne({ user_id: user });
      // console.log("checkUser", checkUser);
      if (checkUser) {
        res.json({
          success: false,
          message: `You have Already Subscribed for ${checkUser.selectedQuantity} Files @ $${checkUser.Price}`,
        });
      } else {
        try {
          let priceId;
          let priceValue;
          let filesValue;
          let monthOrYear;
          if (priceDetails.id === 1 && checkyear === false) {
            priceId = process.env.STRIPE_PAYMENTID_STARTER_MONTH;
            priceValue = priceDetails.price;
            filesValue = priceDetails.files;
            monthOrYear = "Month";
          } else if (priceDetails.id === 1) {
            priceId = process.env.STRIPE_PAYMENTID_STARTER_YEAR;
            priceValue = priceDetails.yearly.price;
            filesValue = priceDetails.files;
            monthOrYear = "Year";
          } else if (priceDetails.id === 2 && checkyear === false) {
            priceId = process.env.STRIPE_PAYMENTID_GROWTH_MONTH;
            priceValue = priceDetails.price;
            filesValue = priceDetails.files;
            monthOrYear = "Month";
          } else if (priceDetails.id === 2) {
            priceId = process.env.STRIPE_PAYMENTID_GROWTH_YEAR;
            priceValue = priceDetails.yearly.price;
            filesValue = priceDetails.files;
            monthOrYear = "Year";
          } else if (priceDetails.id === 3 && checkyear === false) {
            priceId = process.env.STRIPE_PAYMENTID_ELITE_MONTH;
            priceValue = priceDetails.price;
            filesValue = priceDetails.files;
            monthOrYear = "Month";
          } else if (priceDetails.id === 3) {
            priceId = process.env.STRIPE_PAYMENTID_ELITE_YEAR;
            priceValue = priceDetails.yearly.price;
            filesValue = priceDetails.files;
            monthOrYear = "Year";
          }

          const session = await stripe.checkout.sessions.create({
            mode: "subscription",
            line_items: [
              {
                quantity: 1,
                price: priceId,
              },
            ],
            subscription_data: {
              trial_period_days: 7,
            },
            allow_promotion_codes: true,
            metadata: {
              user: user,
              quantity: priceDetails.files,
              price: priceValue,
              monthORYear: monthOrYear,
            },
            // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
            // the actual Session ID is returned in the query parameter when your customer
            // is redirected to the success page.

            success_url: `${process.env.CLIENT_URL}/checkoutSuccess`,
            cancel_url: `${process.env.CLIENT_URL}/checkoutFailed`,
          });
          console.log("session---------------", session);
          console.log("respons--------------", res);

          res.json({ success: true, url: session.url });

          console.log(priceId);
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      res.json({
        success: false,
        message: `Please Login`,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

stripeRouter.post("/cancelStripe", async (req, res) => {
  console.log("res coming");
  try {
    const subscription = await stripe.subscriptions.cancel(
      "sub_1NiGf7SDf73R9RBm9dVeSdkY"
    );
    console.log(subscription);
    res.json({ success: true, sub: subscription });
  } catch (error) {
    console.log(error);
  }
});

// stripeRouter.get("/create-payment-intent", async (req, res) => {
//   console.log("req in create-payment_intent", req.body);
//   // Create a PaymentIntent with the amount, currency, and a payment method type.
//   //
//   // See the documentation [0] for the full list of supported parameters.
//   //
//   // [0] https://stripe.com/docs/api/payment_intents/create
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       currency: "INR",
//       amount: 100,
//       automatic_payment_methods: { enabled: true },
//     });

//     // Send publishable key and PaymentIntent details to client
//     res.send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (e) {
//     console.log("errore", e.message);
//     return res.status(400).send({
//       error: {
//         message: e.message,
//       },
//     });
//   }
// });
// // stripeRouter.get("/create-payment-intent", async (req, res) => {
// //     console.log("req in create-payment_intent");
// //     // Create a PaymentIntent with the amount, currency, and a payment method type.
// //     //
// //     // See the documentation [0] for the full list of supported parameters.
// //     //
// //     // [0] https://stripe.com/docs/api/payment_intents/create
// //     try {
// //         const subscription = await stripe.subscriptions.create({
// //             customer: '12345',
// //             items: [
// //               {
// //                 price: 10000,
// //               },
// //             ],
// //             trial_end: 1610403705,
// //           });

// //       // Send publishable key and PaymentIntent details to client
// //       res.send({
// //         clientSecret: paymentIntent.client_secret,
// //       });
// //     } catch (e) {
// //       console.log("errore", e.message);
// //       return res.status(400).send({
// //         error: {
// //           message: e.message,
// //         },
// //       });
// //     }
// //   });

// stripeRouter.post("/create-checkout-sessionff", async (req, res) => {
//   console.log(req.body);

//   const { values, prices } = req.body;
//   const priceId = "price_1NbGsnSDf73R9RBmaGRZNkwb";

//   const session = await stripe.checkout.sessions.create({
//     mode: "subscription",
//     line_items: [
//       {
//         price_data: {
//           currency: "inr",
//           product_data: {
//             name: values,
//           },
//           unit_amount: prices,
//           // For metered billing, do not pass
//         },
//         quantity: 100,
//       },
//     ],
//     subscription_data: {
//       trial_period_days: 7,
//     },

//     // {CHECKOUT_SESSION_ID} is a string literal; do not change it!
//     // the actual Session ID is returned in the query parameter when your customer
//     // is redirected to the success page.
//     success_url: `${process.env.CLIENT_URL}/checkout-success`,
//     cancel_url: `${process.env.CLIENT_URL}`,
//   });
//   res.json({ url: session.url });
// });

export default stripeRouter;
