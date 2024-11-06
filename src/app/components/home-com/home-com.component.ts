import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProductService } from '../../services/product.service';
import { IProducts } from '../../models/product';
import { API_BASE_URL } from '../../../config';

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
  constructor(private productService: ProductService) {}
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

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getSaleProducts().subscribe((res) => {
      this.products = res;
    });
  }
}
