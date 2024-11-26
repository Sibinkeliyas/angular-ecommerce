import { createFeatureSelector, createSelector } from '@ngrx/store';
import { InitialState } from './cart.reducer';

export const selectCartState = createFeatureSelector<InitialState>('cart');

export const selectCartCount = createSelector(
  selectCartState,
  (state) => state.cartItemsCount
);

export const selectCartItems = createSelector(
  selectCartState,
  (state) => state.data
);
