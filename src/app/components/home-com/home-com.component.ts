import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-com',
  standalone: true,
  imports: [CarouselModule, CommonModule],
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
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  constructor(private readonly http: HttpClient) {}
}
