// DeliveryMethods.tsx
"use client";
import React from "react";

interface DeliveryMethodsProps {
  selectedDelivery: string;
  setSelectedDelivery: (value: string) => void;
}

const DeliveryMethods: React.FC<DeliveryMethodsProps> = ({
  selectedDelivery,
  setSelectedDelivery,
}) => {
  const methods = [
    {
      id: "fedex",
      label: "Free Delivery - FedEx",
      description: "Get it by Friday, 13 Dec 2025",
    },
    {
      id: "dhl",
      label: "$15 - DHL Fast Delivery",
      description: "Get it by Tomorrow",
    },
    {
      id: "express",
      label: "$49 - Express Delivery",
      description: "Get it today",
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {methods.map((method) => (
          <div
            key={method.id}
            className="rounded-lg border border-gray-200 bg-gray-50 p-4 hover:border-orange-300 dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  type="radio"
                  id={method.id}
                  name="delivery-method"
                  value={method.id}
                  checked={selectedDelivery === method.id}
                  onChange={() => setSelectedDelivery(method.id)}
                  className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
                />
              </div>
              <div className="ms-4 text-sm">
                <label
                  htmlFor={method.id}
                  className="font-medium leading-none text-gray-900 dark:text-blue-50"
                >
                  {method.label}
                </label>
                <p className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">
                  {method.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryMethods;
