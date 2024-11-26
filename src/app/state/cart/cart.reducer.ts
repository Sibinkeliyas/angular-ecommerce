import { createReducer, on } from '@ngrx/store';
import {
  decreaseCartCount,
  increaseCartCount,
  loadCartItemsSuccess,
  setInitialValue,
} from './cart.actions';
import { ICartApiResponse } from '../../models/cart';

export interface InitialState {
  cartItemsCount: number;
  data: ICartApiResponse[];
}

const initialValue: InitialState = {
  cartItemsCount: 0,
  data: [],
};

export const cartReducer = createReducer(
  initialValue,
  on(increaseCartCount, (state) => ({
    ...state,
    cartItemsCount: state.cartItemsCount + 1,
  })),
  on(decreaseCartCount, (state) => ({
    ...state,
    cartItemsCount: state.cartItemsCount - 1,
  })),
  on(setInitialValue, (state, { count }) => ({
    ...state,
    cartItemsCount: count,
  })),
  on(loadCartItemsSuccess, (state, { data }) => ({
    ...state,
    data,
  }))
);
