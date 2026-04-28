'use client';

import { useState, useEffect, useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import Link from 'next/link';

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = publishableKey ? loadStripe(publishableKey) : null;

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const createPaymentIntent = useCallback(async () => {
    try {
      const res = await fetch('/api/stripe/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 2900, currency: 'usd' }),
      });

      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setClientSecret(data.clientSecret);
      }
    } catch (err) {
      setError('Failed to initialize payment. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    createPaymentIntent();
  }, [createPaymentIntent]);

  if (!publishableKey) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-xl font-bold text-gray-900">Stripe Not Configured</h1>
            <p className="mt-3 text-gray-600 text-sm">
              Please set <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code> in your environment variables.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple nav */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Velocity
              </span>
            </Link>
            <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              ← Back to site
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Complete your purchase</h1>
            <p className="mt-2 text-gray-600">You&apos;re upgrading to the Velocity Pro Plan.</p>

            <div className="mt-8 bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">Velocity Pro Plan</h3>
                  <p className="text-sm text-gray-500 mt-1">For professional developers and growing teams</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">$29</p>
                  <p className="text-xs text-gray-500">/month</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <ul className="space-y-2">
                  {[
                    'Unlimited projects',
                    '1 TB bandwidth',
                    'Custom domains',
                    'Priority support',
                    'Team collaboration',
                    'Advanced analytics',
                    'Edge functions',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 text-indigo-500 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="font-semibold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-gray-900">$29.00</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Payment details</h2>

            {loading && (
              <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm flex items-center justify-center">
                <div className="flex items-center gap-3 text-gray-500">
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Loading payment form...</span>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
                {error}
              </div>
            )}

            {clientSecret && stripePromise && (
              <Elements
                stripe={stripePromise}
                options={{
                  clientSecret,
                  appearance: {
                    theme: 'stripe',
                    variables: {
                      colorPrimary: '#6366f1',
                      borderRadius: '12px',
                    },
                  },
                }}
              >
                <CheckoutForm />
              </Elements>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
