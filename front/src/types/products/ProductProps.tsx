export interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

export interface ProductList {
  products: ProductProps[];
}

export interface ParamProps {
  params: { id: string };
}
export interface DeliveryMethodsProps {
  selectedDelivery: string;
  setSelectedDelivery: (value: string) => void;
}

export interface PaymentMethodsProps {
  selectedPayment: string;
  setSelectedPayment: (value: string) => void;
}
interface Address {
  street: string;
  city: string;
  country: string;
}

export interface AddressSelectorProps {
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
