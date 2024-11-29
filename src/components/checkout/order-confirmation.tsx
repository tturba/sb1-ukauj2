import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { ShippingFormData } from './shipping-form';

interface OrderConfirmationProps {
  orderNumber: string;
  shippingDetails: ShippingFormData;
  total: number;
  onContinueShopping: () => void;
}

export function OrderConfirmation({
  orderNumber,
  shippingDetails,
  total,
  onContinueShopping,
}: OrderConfirmationProps) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
        <Check className="h-12 w-12 text-green-600" />
      </div>

      <h2 className="mb-2 text-2xl font-bold">Thank You for Your Order!</h2>
      <p className="mb-6 text-gray-600">
        Order #{orderNumber} has been successfully placed
      </p>

      <div className="mb-8 rounded-lg border p-6 text-left">
        <h3 className="mb-4 text-lg font-medium">Order Details</h3>
        <div className="space-y-2">
          <p>
            <span className="font-medium">Shipping to:</span> {shippingDetails.firstName}{' '}
            {shippingDetails.lastName}
          </p>
          <p>
            <span className="font-medium">Address:</span> {shippingDetails.address},{' '}
            {shippingDetails.city}, {shippingDetails.country} {shippingDetails.postalCode}
          </p>
          <p>
            <span className="font-medium">Total:</span> ${total.toFixed(2)}
          </p>
        </div>
      </div>

      <Button onClick={onContinueShopping} size="lg">
        Continue Shopping
      </Button>
    </div>
  );
}