import { Handler, HandlerContext, HandlerEvent } from '@netlify/functions';
import { PaymentIntent } from '@stripe/stripe-js';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.VITE_APP_STRIPE_SECRET_KEY!, { typescript: true });

const handler: Handler = async (event: HandlerEvent, _context: HandlerContext) => {
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing body' }),
    };
  }

  const { amount } = JSON.parse(event.body) as PaymentIntent;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount),
      currency: 'usd',
      payment_method_types: ['card'],
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error }),
    };
  }
};

export { handler };
