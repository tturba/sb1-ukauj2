import React from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard } from 'lucide-react';

interface PaymentFormProps {
  onSubmit: (data: PaymentFormData) => void;
  onBack: () => void;
}

export interface PaymentFormData {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

export function PaymentForm({ onSubmit, onBack }: PaymentFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      cardNumber: formData.get('cardNumber') as string,
      cardHolder: formData.get('cardHolder') as string,
      expiryDate: formData.get('expiryDate') as string,
      cvv: formData.get('cvv') as string,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-lg border p-4">
        <div className="mb-4 flex items-center">
          <CreditCard className="mr-2 h-5 w-5 text-primary-gold" />
          <span className="font-medium">Credit Card</span>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              id="cardNumber"
              required
              pattern="\d{16}"
              placeholder="1234 5678 9012 3456"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-gold focus:outline-none focus:ring-1 focus:ring-primary-gold"
            />
          </div>

          <div>
            <label htmlFor="cardHolder" className="block text-sm font-medium text-gray-700">
              Card Holder Name
            </label>
            <input
              type="text"
              name="cardHolder"
              id="cardHolder"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-gold focus:outline-none focus:ring-1 focus:ring-primary-gold"
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                Expiry Date
              </label>
              <input
                type="text"
                name="expiryDate"
                id="expiryDate"
                required
                pattern="\d{2}/\d{2}"
                placeholder="MM/YY"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-gold focus:outline-none focus:ring-1 focus:ring-primary-gold"
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                id="cvv"
                required
                pattern="\d{3,4}"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-gold focus:outline-none focus:ring-1 focus:ring-primary-gold"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Back to Shipping
        </Button>
        <Button type="submit">
          Place Order
        </Button>
      </div>
    </form>
  );
}