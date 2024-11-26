import { IProducts } from './product';

export interface ICartItemsProps {
  productId: string;
  quantity: number;
}

export interface ICartApiResponse {
  _id: string;
  userId: string;
  productsDetails: IProducts;
  quantity: number;
}
