import CheckoutPage from '@/components/CheckoutPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checkout — Velocity Pro Plan',
  description: 'Complete your purchase of the Velocity Pro Plan for $29/month.',
};

export default function Checkout() {
  return <CheckoutPage />;
}
