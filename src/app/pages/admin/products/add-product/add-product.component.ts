import { Component } from '@angular/core';
import { AddProductComponent } from '../../../../components/admin/products/add-product/add-product.component';

@Component({
  selector: 'app-add-product-page',
  standalone: true,
  imports: [AddProductComponent],
  templateUrl: './add-product.component.html',
})
export class AddProductPage {}
