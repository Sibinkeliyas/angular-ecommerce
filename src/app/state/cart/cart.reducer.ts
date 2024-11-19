import { createReducer, on } from '@ngrx/store';
import {
  decreaseCartCount,
  increaseCartCount,
  setInitialValue,
} from './cart.actions';

export interface InitialState {
  cartItemsCount: number;
}

const initialValue: InitialState = {
  cartItemsCount: 0,
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
  }))
);
