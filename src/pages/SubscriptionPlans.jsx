import React, { useState } from 'react';

const SubscriptionPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  const handleSubscribe = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true); // Open the modal when a plan is selected
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handlePayment = (paymentMethod) => {
    // This is where you integrate the payment gateways (simulating for now)
    if (paymentMethod === 'PhonePe') {
      window.open('https://www.phonepe.com', '_blank'); // PhonePe website
    } else if (paymentMethod === 'Paytm') {
      window.open('https://paytm.com', '_blank'); // Paytm website
    } else if (paymentMethod === 'GooglePay') {
      window.open('https://pay.google.com', '_blank'); // Google Pay website
    } else if (paymentMethod === 'Stripe') {
      window.open('https://www.stripe.com', '_blank'); // Stripe website
    } else if (paymentMethod === 'PayPal') {
      window.open('https://www.paypal.com', '_blank'); // PayPal website
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-4xl font-extrabold text-gray-800 mb-4 drop-shadow">
          Premium Resume Builder Subscription
        </h3>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Take your resume to the next level with exclusive features like AI-enhanced editing, designer templates, expert reviews, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <div
            className={`bg-white shadow-xl rounded-2xl p-8 border transition duration-300 ${selectedPlan === 'Starter' ? 'border-cyan-500 scale-105 shadow-cyan-200' : ''}`}
            onClick={() => handleSubscribe('Starter')}
          >
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Starter</h4>
            <p className="text-gray-600 mb-6">Perfect for freshers and students</p>
            <div className="text-3xl font-extrabold text-cyan-500 mb-6">
              $4.99 <span className="text-sm font-medium text-gray-400">/month</span>
            </div>
            <ul className="text-gray-700 space-y-3 text-left mb-6">
              <li>✅ Access to all templates</li>
              <li>✅ Basic AI feedback</li>
              <li>✅ Unlimited downloads</li>
            </ul>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-semibold shadow-md">
              Subscribe
            </button>
          </div>

          {/* Pro Plan */}
          <div
            className={`bg-white shadow-2xl rounded-2xl p-10 border-2 transform transition duration-300 ${selectedPlan === 'Pro' ? 'border-cyan-500 scale-105 shadow-blue-300' : ''}`}
            onClick={() => handleSubscribe('Pro')}
          >
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Pro</h4>
            <p className="text-gray-600 mb-6">Best for working professionals</p>
            <div className="text-3xl font-extrabold text-blue-600 mb-6">
              $9.99 <span className="text-sm font-medium text-gray-400">/month</span>
            </div>
            <ul className="text-gray-700 space-y-3 text-left mb-6">
              <li>✅ All Starter features</li>
              <li>✅ Advanced AI analysis</li>
              <li>✅ Design customization</li>
              <li>✅ Resume review by experts</li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
              Go Pro
            </button>
          </div>

          {/* Elite Plan */}
          <div
            className={`bg-white shadow-xl rounded-2xl p-8 border transition duration-300 ${selectedPlan === 'Elite' ? 'border-indigo-500 scale-105 shadow-indigo-200' : ''}`}
            onClick={() => handleSubscribe('Elite')}
          >
            <h4 className="text-2xl font-bold text-gray-800 mb-4">Elite</h4>
            <p className="text-gray-600 mb-6">For career changers and executives</p>
            <div className="text-3xl font-extrabold text-indigo-500 mb-6">
              $19.99 <span className="text-sm font-medium text-gray-400">/month</span>
            </div>
            <ul className="text-gray-700 space-y-3 text-left mb-6">
              <li>✅ All Pro features</li>
              <li>✅ 1-on-1 career coaching</li>
              <li>✅ Interview preparation tools</li>
              <li>✅ Dedicated support</li>
            </ul>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold shadow-md">
              Get Elite
            </button>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-80">
            <h4 className="text-2xl font-bold mb-4">Complete Your Payment</h4>
            <p className="text-lg mb-4">You have selected the {selectedPlan} plan. Choose a payment method to proceed.</p>
            {/* Payment options */}
            <div className="space-y-4">
              <button
                onClick={() => handlePayment('Stripe')}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow-md w-full"
              >
                Pay with Stripe
              </button>
              <button
                onClick={() => handlePayment('PayPal')}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-md w-full"
              >
                Pay with PayPal
              </button>
              {/* PhonePe Payment */}
              <button
                onClick={() => handlePayment('PhonePe')}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold shadow-md w-full"
              >
                Pay with PhonePe
              </button>
              {/* Paytm Payment */}
              <button
                onClick={() => handlePayment('Paytm')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold shadow-md w-full"
              >
                Pay with Paytm
              </button>
              {/* Google Pay */}
              <button
                onClick={() => handlePayment('GooglePay')}
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full font-semibold shadow-md w-full"
              >
                Pay with Google Pay
              </button>
            </div>
            <div className="mt-4">
              <button
                onClick={handleCloseModal}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-full font-semibold shadow-md w-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SubscriptionPlans;
