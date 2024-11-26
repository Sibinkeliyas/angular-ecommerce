import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ICartApiResponse } from '../../models/cart';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { selectCartItems } from '../../state/cart/cart.selector';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart-com',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './cart-com.component.html',
})
export class CartComComponent {
  cartService = inject(CartService);
  router = inject(Router);

  cart$: Observable<ICartApiResponse[]>;
  data: { [key: string]: number } = {};
  total: number = 0;

  constructor(private store: Store<AppState>) {
    this.cart$ = this.store.select(selectCartItems);
    this.cart$.subscribe((res) => {
      res.forEach((r) => {
        this.total += r.productsDetails.price * r.quantity;
        this.data[r.productsDetails._id] = r.quantity;
      });
    });
  }

  updateCart() {
    const cartItems = [];
    for (const value in this.data) {
      cartItems.push({
        productId: value,
        quantity: this.data[value],
      });
    }
    this.cartService.updateCartItems(cartItems).subscribe((res) => {
      // this.router.navigateByUrl('/checkout');
    });
  }
}
