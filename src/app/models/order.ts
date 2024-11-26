export interface IOrderProducts {
  productId: string;
  quantity: string;
  price: string;
}

export interface IOrder {
  userId: string;
  firstName: string;
  lastName: string;
  country: string;
  address: string;
  city: string;
  state: string;
  postCode: string;
  phone: string;
  email: string;
  couponId: string;
  paymentMethod: string;
  total: number;
  products: IOrderProducts[];
}
