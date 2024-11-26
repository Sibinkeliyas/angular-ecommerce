export interface IProducts {
  _id: string;
  availableSizes: string[];
  brandId: string;
  categoryId: string;
  createdAt: string;
  images: string[];
  name: string;
  price: number;
  rating: number;
  sale: boolean;
  updatedAt: string;
}

export interface IProduct {
  _id: string;
  name: string;
  price: 3239;
  categoryId: string;
  brandId: string;
  availableSizes: string[];
  rating: 4;
  sale: true;
  images: string[];
}
