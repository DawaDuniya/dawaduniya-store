export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  subtitle: string;
  category: Category;
  introduction: string;
  use: string;
  sideEffect: string;
  direction: string;
  quantity: number;
  price: string;
  images: Image[];
  isFeatured: boolean;
}

export interface Image {
  id: string;
  url: string;
}
