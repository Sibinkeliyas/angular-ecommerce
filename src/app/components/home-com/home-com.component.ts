import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

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

  products = [
    {
      name: 'Piqué Biker Jacke',
      imgUrl: 'url(../../../../img/product/product-1.jpg)',
      price: 67.24,
      isInCart: true,
      isInWishlist: true,
      new: true,
      sale: false,
    },
    {
      name: 'Piqué Biker Jacket',
      imgUrl: 'url(../../../../img/product/product-2.jpg)',
      price: 67.24,
      isInCart: true,
      isInWishlist: false,
      new: false,
      sale: false,
    },
    {
      name: 'Multi-pocket Chest Bag',
      imgUrl: 'url(../../../../img/product/product-3.jpg)',
      price: 48.21,
      isInCart: true,
      isInWishlist: false,
      new: true,
      sale: false,
    },
    {
      name: 'Diagonal Textured Cap',
      imgUrl: 'url(../../../../img/product/product-4.jpg)',
      price: 78.21,
      isInCart: true,
      isInWishlist: false,
      new: false,
      sale: false,
    },
    {
      name: 'Lether Backpack',
      imgUrl: 'url(../../../../img/product/product-5.jpg)',
      price: '67.24',
      isInCart: true,
      isInWishlist: false,
      new: false,
      sale: true,
    },
    {
      name: 'Ankle Boots',
      imgUrl: 'url(../../../../img/product/product-6.jpg)',
      price: 14.32,
      isInCart: true,
      isInWishlist: false,
      new: false,
      sale: false,
    },
    {
      name: 'T-shirt Contrast Pocket',
      imgUrl: 'url(../../../../img/product/product-7.jpg)',
      price: 25.21,
      isInCart: true,
      isInWishlist: false,
      new: false,
      sale: false,
    },
    {
      name: 'Basic Flowing Scarf',
      imgUrl: 'url(../../../../img/product/product-8.jpg)',
      price: '67.24',
      isInCart: true,
      isInWishlist: false,
      new: false,
      sale: true,
    },
  ];
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
}
