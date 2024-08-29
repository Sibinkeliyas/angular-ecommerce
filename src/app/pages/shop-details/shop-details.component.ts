import { Component } from '@angular/core';
import { ShopDetailsComComponent } from '../../components/shop-details-com/shop-details-com.component';

@Component({
  selector: 'app-shop-details',
  standalone: true,
  imports: [ShopDetailsComComponent],
  templateUrl: './shop-details.component.html',
  styleUrl: './shop-details.component.css'
})
export class ShopDetailsComponent {

}
