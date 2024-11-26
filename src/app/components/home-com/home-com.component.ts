import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProductService } from '../../services/product.service';
import { IProducts } from '../../models/product';
import { API_BASE_URL } from '../../../config';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { CartService } from '../../services/cart.service';
import { MessageService } from 'primeng/api';
import { increaseCartCount, loadCartItems, loadCartItemsSuccess } from '../../state/cart/cart.actions';
import { Observable } from 'rxjs';
import { ICartApiResponse } from '../../models/cart';
import { selectCartItems } from '../../state/cart/cart.selector';

@Component({
  selector: 'app-home-com',
  standalone: true,
  imports: [
    CarouselModule,
    CommonModule,
    RouterModule,
    ButtonModule,
    TagModule,
  ],
  templateUrl: './home-com.component.html',
})
export class HomeComComponent {
  cart$: Observable<ICartApiResponse[]>;

  constructor(
    private productService: ProductService,
    private store: Store<AppState>
  ) {
    this.cart$ = this.store.select(selectCartItems);
  }
  cartService = inject(CartService);
  messageService = inject(MessageService);

  apiBaseUrl = API_BASE_URL;
  items = [
    {
      image: 'url(../../../../img/hero/hero-1.jpg)',
      mainTitle: 'Summer Collection',
      title: 'Fall - Summer Collections 2030',
      desc: `A specialist label creating luxury essentials. Ethically crafted
                with an unwavering commitment to exceptional quality.`,
    },
    {
      image: 'url(../../../../img/hero/hero-2.jpg)',
      mainTitle: 'Winter Collection',
      title: 'Fall - Winter Collections 2030',
      desc: `A specialist label creating luxury essentials. Ethically crafted
                with an unwavering commitment to exceptional quality.`,
    },
  ];

  products: IProducts[] = [];
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '991px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  handleAddToCart(id: string) {
    this.store.dispatch(increaseCartCount());
    this.cartService
      .addToCart({ productId: id, quantity: 1 })
      .subscribe((res) => {
        this.store.dispatch(loadCartItems());
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Message Content',
        });
      });
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getSaleProducts().subscribe((res) => {
      this.products = res;
    });
  }
}
