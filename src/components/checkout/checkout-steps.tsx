import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CheckoutStepsProps {
  currentStep: number;
  steps: string[];
}

export function CheckoutSteps({ currentStep, steps }: CheckoutStepsProps) {
  return (
    <div className="flex items-center justify-center">
      {steps.map((step, index) => (
        <React.Fragment key={step}>
          <div className="flex items-center">
            <div
              className={cn(
                'h-8 w-8 rounded-full border-2 flex items-center justify-center',
                {
                  'border-primary-gold bg-primary-gold text-white': index <= currentStep,
                  'border-gray-300': index > currentStep,
                }
              )}
            >
              {index < currentStep ? (
                <Check className="h-4 w-4" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span
              className={cn('ml-2', {
                'font-medium text-gray-900': index <= currentStep,
                'text-gray-500': index > currentStep,
              })}
            >
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={cn('h-0.5 w-16 mx-2', {
                'bg-primary-gold': index < currentStep,
                'bg-gray-300': index >= currentStep,
              })}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}