import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { UserService } from '../../../services/user.service';
import { RegisterModel } from '../../../models/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  userService = inject(UserService);
  user: RegisterModel | null = null;
  isUserLoggedIn: boolean;
  constructor(private route: Router) {
    this.isUserLoggedIn = this.userService.isUserLogined();
    this.userService.getUserById().subscribe((res: RegisterModel) => {
      this.user = res;
      console.log(res);
    });
  }
  activePage = '';

  ngOnInit() {
    this.activePage = this.route.url.replace('/', '');
    this.route.events.subscribe((url) => {
      if (url instanceof NavigationEnd) {
        this.activePage = url.url.replace('/', '');
        console.log(url.url.replace('/', ''));
      } else {
        console.log(url);
      }
    });
  }
}
