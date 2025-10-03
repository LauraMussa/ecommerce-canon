"use client";

import { paymentMethods } from "@/helpers/callouts";
import { PaymentMethodsProps } from "@/types/products/ProductProps";

const PaymentMethods: React.FC<PaymentMethodsProps> = ({
  selectedPayment,
  setSelectedPayment,
}) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 hover:border-orange-300 dark:bg-gray-800"
          >
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  type="radio"
                  id={method.id}
                  name="payment-method"
                  value={method.id}
                  checked={selectedPayment === method.id}
                  onChange={() => setSelectedPayment(method.id)}
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
            {method.id !== "pay-on-delivery" && (
              <div className="mt-4 flex items-center gap-2">
                <button className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-blue-50">
                  Delete
                </button>
                <div className="h-3 w-px shrink-0 bg-gray-200 dark:bg-gray-700"></div>
                <button className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-blue-50">
                  Edit
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;
