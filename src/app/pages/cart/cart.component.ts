import { Component } from '@angular/core';
import { CartComComponent } from '../../components/cart-com/cart-com.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartComComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {}
