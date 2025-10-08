"use client";
import { useCart } from "@/context/CartContext";
import { deliveryMethods } from "@/helpers/callouts";
import { DeliveryMethodsProps } from "@/types/products/ProductProps";
import React, { useEffect } from "react";

const DeliveryMethods: React.FC<DeliveryMethodsProps> = ({
  selectedDelivery,
  setSelectedDelivery,
}) => {
  const { setDelivery } = useCart();
  useEffect(() => {
    setDelivery(0);
  }, []);
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {deliveryMethods.map((method) => (
          <div
            key={method.name}
            className="rounded-lg border border-gray-200 bg-gray-50 p-4 hover:border-orange-300 dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  type="radio"
                  id={method.name}
                  name="delivery-method"
                  value={method.id}
                  checked={selectedDelivery === method.name}
                  onChange={() => {
                    setSelectedDelivery(method.name);
                    if (method.id === 3) {
                      setDelivery(49);
                    } else if (method.id === 2) {
                      setDelivery(15);
                    } else {
                      setDelivery(0);
                    }
                  }}
                  className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
                />
              </div>
              <div className="ms-4 text-sm">
                <label
                  htmlFor={method.name}
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
