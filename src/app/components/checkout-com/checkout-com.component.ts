import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { Observable } from 'rxjs';
import { ICartApiResponse } from '../../models/cart';
import { selectCartItems } from '../../state/cart/cart.selector';
import { CommonModule } from '@angular/common';
import { Checkout } from '../../models/checkout';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { IOrder } from '../../models/order';

@Component({
  selector: 'app-checkout-com',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout-com.component.html',
})
export class CheckoutComComponent {
  orderService = inject(OrderService);

  cart$: Observable<ICartApiResponse[]>;
  checkout: Checkout = new Checkout();
  total: number = 0;
  constructor(private store: Store<AppState>) {
    this.cart$ = this.store.select(selectCartItems);
    this.cart$.subscribe((res) => {
      res.forEach((r) => {
        this.total += r.quantity * r.productsDetails.price;
      });
    });
  }

  createOrder() {
    const orderData: IOrder = {
      firstName: this.checkout.firstName,
      lastName: this.checkout.lastName,
      phone: this.checkout.phone,
      email: this.checkout.email,
      paymentMethod: 'paypal',
      address: this.checkout.address.streetAdress,
      city: this.checkout.address.city,
      country: this.checkout.country,
      couponId: '',
      postCode: this.checkout.address.postCode,
      products: [],
      state: this.checkout.country,
      total: this.total,
      userId: '',
    };
    this.orderService.createOrder(orderData).subscribe((res) => {});
  }
}
