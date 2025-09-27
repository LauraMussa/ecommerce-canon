"use client";
import React from "react";
import { toastSuccess } from "@/helpers/toast";

interface Address {
  street: string;
  city: string;
  country: string;
}

interface Props {
  userAddress: string;
  additionalAddresses: Address[];
  selectedAddress: string;
  setSelectedAddress: (addr: string) => void;
  formData: {
    name: string;
    email: string;
    country: string;
    city: string;
    street: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      country: string;
      city: string;
      street: string;
    }>
  >;
  handleAddAddress: () => void;
  show: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

const AddressSelector: React.FC<Props> = ({
  userAddress,
  additionalAddresses,
  selectedAddress,
  setSelectedAddress,
  formData,
  setFormData,
  handleAddAddress,
  show,
  handleOpen,
  handleClose,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.country.trim() !== "" &&
      formData.city.trim() !== "" &&
      formData.street.trim() !== ""
    );
  };

  return (
    <div className="flex flex-col gap-4 text-blue-50">
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="user-address"
            value={userAddress}
            checked={selectedAddress === userAddress}
            onChange={() => setSelectedAddress(userAddress)}
            className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
          />
          <p>{userAddress}, M5500 GQM, Mendoza, Argentina</p>
        </div>

        {additionalAddresses.map((addr, index) => {
          const addrValue = `${addr.street}, ${addr.city}, ${addr.country}`;
          return (
            <div key={`addr-${index}`} className="flex items-center gap-2">
              <input
                type="radio"
                name="user-address"
                value={addrValue}
                checked={selectedAddress === addrValue}
                onChange={() => setSelectedAddress(addrValue)}
                className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600"
              />
              <p>{addrValue}</p>
            </div>
          );
        })}
      </div>
      <div>
        <button
          onClick={handleOpen}
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg cursor-pointer bg-slate-600 px-5 py-2 text-sm font-medium text-blue-50 hover:bg-slate-500"
        >
          <span className="text-2xl">+</span> Add new address
        </button>

        <div
          className={
            show
              ? "fixed inset-0 z-50 flex flex-col px-6 m-4 md:m-20 rounded-2xl bg-slate-800 border border-slate-100/50 overflow-auto"
              : "hidden"
          }
        >
          <button
            type="button"
            onClick={handleClose}
            className="text-right text-4xl p-3 cursor-pointer"
          >
            ×
          </button>

          <div className="flex flex-col gap-5 justify-center h-full ">
            <div className="flex flex-col md:flex-row gap-5 justify-around">
              <div className="w-full">
                <label htmlFor="name" className="mb-2 block text-sm font-medium ">
                  Your name*
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Bonnie Green"
                  className="block w-full rounded-lg border p-2.5 text-sm"
                />
              </div>

              <div className="w-full">
                <label htmlFor="email" className="mb-2 block text-sm font-medium ">
                  Your email*
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@email.com"
                  className="block w-full rounded-lg border p-2.5 text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="country" className="mb-2 block text-sm font-medium ">
                Country*
              </label>
              <input
                id="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter your country"
                className="block w-full rounded-lg border p-2.5 text-sm"
              />
            </div>

            <div>
              <label htmlFor="city" className="mb-2 block text-sm font-medium ">
                City*
              </label>
              <input
                id="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="block w-full rounded-lg border p-2.5 text-sm"
              />
            </div>

            <div>
              <label htmlFor="street" className="mb-2 block text-sm font-medium ">
                Street & Number*
              </label>
              <input
                type="text"
                id="street"
                value={formData.street}
                onChange={handleChange}
                placeholder="123 Main St"
                className="block w-full rounded-lg border p-2.5 text-sm"
              />
            </div>

            <button
              type="button"
              onClick={handleAddAddress}
              disabled={!isFormValid()}
              className={`w-1/2 mx-auto flex items-center justify-center rounded-lg px-5 py-2 text-sm font-medium
                ${isFormValid() ? "bg-gray-900 text-gray-50" : "bg-gray-600 text-gray-400 cursor-not-allowed"}`}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressSelector;
