import { Component } from '@angular/core';
import { CheckoutComComponent } from '../../components/checkout-com/checkout-com.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CheckoutComComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {}
