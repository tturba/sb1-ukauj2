import React from 'react';
import { Button } from '@/components/ui/button';

interface ShippingFormProps {
  onSubmit: (data: ShippingFormData) => void;
}

export interface ShippingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
}

export function ShippingForm({ onSubmit }: ShippingFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onSubmit({
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      address: formData.get('address') as string,
      city: formData.get('city') as string,
      country: formData.get('country') as string,
      postalCode: formData.get('postalCode') as string,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-gold focus:outline-none focus:ring-1 focus:ring-primary-gold"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-gold focus:outline-none focus:ring-1 focus:ring-primary-gold"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-gold focus:outline-none focus:ring-1 focus:ring-primary-gold"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-gold focus:outline-none focus:ring-1 focus:ring-primary-gold"
          />
        </div>
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <input
          type="text"
          name="address"
          id="address"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-gold focus:outline-none focus:ring-1 focus:ring-primary-gold"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-gold focus:outline-none focus:ring-1 focus:ring-primary-gold"
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <select
            name="country"
            id="country"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-gold focus:outline-none focus:ring-1 focus:ring-primary-gold"
          >
            <option value="CN">China</option>
            <option value="JP">Japan</option>
            <option value="KR">South Korea</option>
          </select>
        </div>
        <div>
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
            Postal Code
          </label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary-gold focus:outline-none focus:ring-1 focus:ring-primary-gold"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" size="lg">
          Continue to Payment
        </Button>
      </div>
    </form>
  );
}