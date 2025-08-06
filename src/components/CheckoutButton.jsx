import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_YOUR_PUBLIC_KEY'); // Replace with your Stripe public key

const CheckoutButton = ({ plan }) => {
  const handleClick = async () => {
    const stripe = await stripePromise;

    const response = await fetch('http://localhost:5000/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ plan }), // 'basic' or 'premium'
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 px-6 rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all"
    >
      Subscribe Now
    </button>
  );
};

export default CheckoutButton;
