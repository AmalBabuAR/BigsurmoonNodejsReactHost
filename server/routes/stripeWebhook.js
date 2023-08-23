import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import PaymentData from "../models/paymentModel.js";

dotenv.config();

//stripe config
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_TEST);

const stripeWebhookRouter = express.Router();

stripeWebhookRouter.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (request, response) => {
    console.log("req in the webhook+++++++++++");
    console.log("req in the webhook---------", request);
    console.log("req in the webhook**********", request.body);
    const sig = request.headers["stripe-signature"];
    console.log("sign +++++++++++++", sig);

    let event = request.body;
    console.log("event", event);
    console.log("event Type", event.type);

    // try {
    //   event = stripe.webhooks.constructEvent(request.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    //   console.log('event ++++++++', event);
    // } catch (err) {
    //   console.log('error in webhook +++++++++',err);
    //   response.status(400).send(`Webhook Error: ${err.message}`);
    //   return;
    // }

    // Handle the event
    switch (event.type) {
      case "checkout.session.async_payment_failed":
        const checkoutSessionAsyncPaymentFailed = event.data.object;
        console.log(
          "checkoutSessionAsyncPaymentFailed",
          checkoutSessionAsyncPaymentFailed
        );
        // Then define and call a function to handle the event checkout.session.async_payment_failed
        break;
      case "checkout.session.async_payment_succeeded":
        const checkoutSessionAsyncPaymentSucceeded = event.data.object;
        console.log(
          "checkoutSessionAsyncPaymentSucceeded",
          checkoutSessionAsyncPaymentSucceeded
        );
        // Then define and call a function to handle the event checkout.session.async_payment_succeeded
        break;
      case "checkout.session.completed":
        const checkoutResponse = event.data.object;
        console.log("checkoutSessionCompleted", checkoutResponse);
        try {
          const data = {
            user_id: checkoutResponse.metadata.user,
            paymentCustomerID: checkoutResponse.customer,
            paymentCustomerEmail: checkoutResponse.customer_details.email,
            paymentCustomerName: checkoutResponse.customer_details.name,
            paymentMode: checkoutResponse.mode,
            selectedQuantity: checkoutResponse.metadata.quantity,
            Price: checkoutResponse.metadata.price,
          };
          console.log("data", data);
          const dataRes = new PaymentData(data);
          await dataRes.save()
          console.log(dataRes);
        } catch (error) {
          console.log(error);
        }

        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send();
  }
);

export default stripeWebhookRouter;
