import { ProductProps } from "../products/ProductProps";

export interface UserProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  shippingAdress: string;
  avatar: string;
  orders: Order[];
  dateOfBirth: string;
}
export interface UserI {
  address: string;
  email: string;
  name: string;
  orders: string[];
  phone: string;
  role: string;
}

export interface Order {
  id: number;
  total: number;
  date: string;
  status: string;
  products: ProductProps[];
}
