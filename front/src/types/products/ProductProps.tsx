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

