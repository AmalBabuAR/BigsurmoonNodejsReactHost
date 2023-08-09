import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";

const env = dotenv.config();

//stripe config
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST);

const stripeWebhookRouter = express.Router();

const webhook_secret = "whsec_ivCQd69WuU57C0ZTHIoDT9CkhHPXJiGw";

// Webhook endpoint to handle payment success event
stripeWebhookRouter.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const payload = req.body;
    console.log('payload', payload);
    const sig = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, webhook_secret); // Replace with your actual webhook secret
    } catch (err) {
        console.log(err);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.async_payment_failed":
        const checkoutSessionAsyncPaymentFailed = event.data.object;
        console.log('checkoutSessionAsyncPaymentFailed', checkoutSessionAsyncPaymentFailed);
        // Then define and call a function to handle the event checkout.session.async_payment_failed
        break;
      case "checkout.session.async_payment_succeeded":
        const checkoutSessionAsyncPaymentSucceeded = event.data.object;
        console.log('checkoutSessionAsyncPaymentSucceeded', checkoutSessionAsyncPaymentSucceeded);
        // Then define and call a function to handle the event checkout.session.async_payment_succeeded
        break;
      case "checkout.session.completed":
        const checkoutSessionCompleted = event.data.object;
        console.log('checkoutSessionCompleted',checkoutSessionCompleted);
        // Then define and call a function to handle the event checkout.session.completed
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    // Return a 200 response to acknowledge receipt of the event
    res.send();
  }
);

export default stripeWebhookRouter;