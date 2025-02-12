export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id?: number;
  title: string;
  imageUrl?: string;
  products: Product[];
  route: string;
}

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
