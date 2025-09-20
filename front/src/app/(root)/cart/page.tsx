import Cart from "@/components/Cart";
import { Description } from "@headlessui/react";
import React from "react";
export interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}
const products = [
  {
    id: 1,
    name: "Canon E0S 4000D",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, asperiores.",
    price: 3457,
    stock: 15,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1755817734/C%C3%A1mara_Canon_EOS_4000D_6_-removebg-preview_nolz3s.png",
    categoryId: 1,
  },
  {
    id: 2,
    name: "Canon PowerShot G7",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, asperiores.",
    price: 3457,
    stock: 15,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1755817679/camara_digital_Canon_PowerShot_G7_X_Mark_III_1_-removebg-preview_dtuulh.png",
    categoryId: 1,
  },

  {
    id: 3,
    name: "Mini trípode PIXI",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, asperiores.",
    price: 100,
    stock: 10,
    image:
      "https://res.cloudinary.com/dvgnwrkvl/image/upload/v1755818488/Accesorio_Mini_tr%C3%ADpode_de_2_secciones_PIXI_EVO_de_Manfrotto__negro_1_-removebg-preview_lj4kxh.png",
    categoryId: 3,
  },
];

const cart = () => {
  return (
    <div>
      <Cart />
    </div>
  );
};

export default cart;
