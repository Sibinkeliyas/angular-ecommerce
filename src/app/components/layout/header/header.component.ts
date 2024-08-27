import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private route: Router) {}
  activePage = ''

  ngOnInit() {
    this.activePage = this.route.url.replace('/', '');
    this.route.events.subscribe((url) => {
      if (url instanceof NavigationEnd) {
        this.activePage = url.url.replace('/', '');
        console.log(url.url.replace('/' , ''));
      } else {
        console.log(url);
        
      }
    });
  }
}
