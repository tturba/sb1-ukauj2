import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutSteps } from '@/components/checkout/checkout-steps';
import { ShippingForm, type ShippingFormData } from '@/components/checkout/shipping-form';
import { PaymentForm, type PaymentFormData } from '@/components/checkout/payment-form';
import { OrderConfirmation } from '@/components/checkout/order-confirmation';

const CHECKOUT_STEPS = ['Shipping', 'Payment', 'Confirmation'];

function Checkout() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [shippingDetails, setShippingDetails] = useState<ShippingFormData | null>(null);
  const [orderNumber, setOrderNumber] = useState<string>('');

  const handleShippingSubmit = (data: ShippingFormData) => {
    setShippingDetails(data);
    setCurrentStep(1);
  };

  const handlePaymentSubmit = (data: PaymentFormData) => {
    // In a real app, process payment here
    console.log('Processing payment:', data);
    // Generate a random order number
    setOrderNumber(Math.random().toString(36).substr(2, 9).toUpperCase());
    setCurrentStep(2);
  };

  const handleBackToShipping = () => {
    setCurrentStep(0);
  };

  const handleContinueShopping = () => {
    navigate('/products');
  };

  return (
    <div className="container py-8">
      <h1 className="mb-8 text-3xl font-bold">Checkout</h1>

      <div className="mb-8">
        <CheckoutSteps currentStep={currentStep} steps={CHECKOUT_STEPS} />
      </div>

      <div className="mx-auto max-w-2xl">
        {currentStep === 0 && (
          <ShippingForm onSubmit={handleShippingSubmit} />
        )}

        {currentStep === 1 && (
          <PaymentForm
            onSubmit={handlePaymentSubmit}
            onBack={handleBackToShipping}
          />
        )}

        {currentStep === 2 && shippingDetails && (
          <OrderConfirmation
            orderNumber={orderNumber}
            shippingDetails={shippingDetails}
            total={149.99} // In a real app, this would come from the cart
            onContinueShopping={handleContinueShopping}
          />
        )}
      </div>
    </div>
  );
}

export default Checkout;