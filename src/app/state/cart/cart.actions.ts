import { createAction, props } from '@ngrx/store';

export const increaseCartCount = createAction('[cart] Increase cart count');

export const decreaseCartCount = createAction('[cart] Decrease cartCount');

export const setInitialValue = createAction(
  '[cart] Set initial value',
  props<{ count: number }>()
);
