import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";

const env = dotenv.config();

//stripe config
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST);

const stripeWebhookRouter = express.Router();

const b = 'whsec_cdfb269e3f39af946052f256d392a9df8016bf6ab19e82f978aa8953259462ee'

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_cdfb269e3f39af946052f256d392a9df8016bf6ab19e82f978aa8953259462ee";
const endpointSecretss = "whsec_yCX9xg27T9WQKkHEqUoIfvhdBOhwmCFf";

stripeWebhookRouter.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];
  console.log('payload', request);
  console.log('sign', sig);

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecretss);
  } catch (err) {
    console.log(err);
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.async_payment_failed':
      const checkoutSessionAsyncPaymentFailed = event.data.object;
      console.log('checkoutSessionAsyncPaymentFailed', checkoutSessionAsyncPaymentFailed);
      // Then define and call a function to handle the event checkout.session.async_payment_failed
      break;
    case 'checkout.session.async_payment_succeeded':
      const checkoutSessionAsyncPaymentSucceeded = event.data.object;
      console.log('checkoutSessionAsyncPaymentSucceeded', checkoutSessionAsyncPaymentSucceeded);
      // Then define and call a function to handle the event checkout.session.async_payment_succeeded
      break;
    case 'checkout.session.completed':
      const checkoutSessionCompleted = event.data.object;
      console.log('checkoutSessionCompleted',checkoutSessionCompleted);
      // Then define and call a function to handle the event checkout.session.completed
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

export default stripeWebhookRouter;