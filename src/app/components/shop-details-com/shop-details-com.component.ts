import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../models/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { loadCartItems } from '../../state/cart/cart.actions';

@Component({
  selector: 'app-shop-details-com',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shop-details-com.component.html',
})
export class ShopDetailsComComponent {
  constructor(private store: Store<AppState>) {}
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  productService = inject(ProductService);
  cartService = inject(CartService);
  messageService = inject(MessageService);

  product: IProduct | null = null;
  selectedProductImg: string = '';
  quantity = 1;

  handleUpdateSelectedImg(img?: string) {
    this.selectedProductImg = img || this.selectedProductImg;
  }

  addToCart() {
    this.cartService
      .addToCart({
        productId: this.product?._id || '',
        quantity: Number(this.quantity),
      })
      .subscribe((res) => {
        this.store.dispatch(loadCartItems());
        this.messageService.add({
          summary: 'Added to cart',
          detail: 'Products added to cart succesfully',
          severity: 'success',
        });
      });
  }

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails() {
    this.productService
      .getProduct(this.activatedRoute.snapshot.params['productId'])
      .subscribe((res) => {
        this.product = res;
        this.selectedProductImg = res.images[0];
      });
  }
}
