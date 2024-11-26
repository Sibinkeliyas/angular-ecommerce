import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadCartItems,
  loadCartItemsSuccess,
  setInitialValue,
} from './cart.actions';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Injectable()
export class CartEffect {
  actions$ = inject(Actions);
  cartService = inject(CartService);
  constructor (private store: Store<AppState>){}

  loadCarts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCartItems),
      exhaustMap(() =>
        this.cartService.getCartItems().pipe(
          map((data) => {
            return loadCartItemsSuccess({ data });
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
