import React from 'react';
import { Button } from '@/components/ui/button';

interface CartSummaryProps {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  onCheckout: () => void;
}

export function CartSummary({ subtotal, tax, shipping, total, onCheckout }: CartSummaryProps) {
  return (
    <div className="rounded-lg border bg-white p-6">
      <h2 className="text-lg font-medium">Order Summary</h2>
      
      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-medium">${subtotal.toFixed(2)}</p>
        </div>
        
        <div className="flex justify-between">
          <p className="text-gray-600">Tax</p>
          <p className="font-medium">${tax.toFixed(2)}</p>
        </div>
        
        <div className="flex justify-between">
          <p className="text-gray-600">Shipping</p>
          <p className="font-medium">${shipping.toFixed(2)}</p>
        </div>
        
        <div className="border-t pt-4">
          <div className="flex justify-between">
            <p className="text-lg font-medium">Total</p>
            <p className="text-lg font-bold">${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
      
      <Button
        className="mt-6 w-full"
        size="lg"
        onClick={onCheckout}
      >
        Proceed to Checkout
      </Button>
    </div>
  );
}