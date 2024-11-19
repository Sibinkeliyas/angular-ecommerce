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
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../state/app.state';
import { selectCartCount } from '../../../state/cart/cart.selector';
import { selectUserProfile, userLoginStatus } from '../../../state/user/user.selector';
import { IUserProfile, userAuthentication } from '../../../state/user/user.actions';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  userService = inject(UserService);
  user$: Observable<IUserProfile | null>;
  isUserLoggedIn$: Observable<boolean>;
  cartCount$: Observable<number>;

  constructor(private route: Router, private store: Store<AppState>) {
    this.cartCount$ = this.store.select(selectCartCount);
    this.userService.getUserById().subscribe((res: RegisterModel) => {
      this.store.dispatch(
        userAuthentication({ isLoggedIn: true, profile: { ...res, _id: '' } })
      );
    });
    this.isUserLoggedIn$ = this.store.select(userLoginStatus);
    this.user$ = this.store.select(selectUserProfile);
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
