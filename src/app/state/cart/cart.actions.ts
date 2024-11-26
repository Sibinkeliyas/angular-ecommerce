import { createAction, props } from '@ngrx/store';
import { ICartApiResponse } from '../../models/cart';

export const increaseCartCount = createAction('[cart] Increase cart count');

export const decreaseCartCount = createAction('[cart] Decrease cartCount');

export const setInitialValue = createAction(
  '[cart] Set initial value',
  props<{ count: number }>()
);

export const loadCartItems = createAction('[cart] Load cart items');

export const loadCartItemsSuccess = createAction(
  '[cart] load cart item success',
  props<{ data: ICartApiResponse[] }>()
);
