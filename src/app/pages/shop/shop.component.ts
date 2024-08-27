import { Component } from '@angular/core';
import { ShopComComponent } from '../../components/shop-com/shop-com.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ShopComComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}
