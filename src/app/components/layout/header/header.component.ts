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
import {
  selectCartCount,
  selectCartItems,
} from '../../../state/cart/cart.selector';
import {
  selectUserProfile,
  userLoginStatus,
} from '../../../state/user/user.selector';
import {
  IUserProfile,
  userAuthentication,
} from '../../../state/user/user.actions';
import { CartEffect } from '../../../state/cart/cart.effects';
import {
  loadCartItems,
  setInitialValue,
} from '../../../state/cart/cart.actions';
import { ICartApiResponse } from '../../../models/cart';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  userService = inject(UserService);
  cartEffect = inject(CartEffect);
  user$: Observable<IUserProfile | null>;
  isUserLoggedIn$: Observable<boolean>;
  cart$: Observable<ICartApiResponse[]>;

  total = 0;

  constructor(private route: Router, private store: Store<AppState>) {
    this.cart$ = this.store.select(selectCartItems);
    this.cart$.subscribe((cart) => {
      cart.forEach((c) => {
        this.total += c.quantity * c.productsDetails.price;
      });
    });
    this.userService.getUserById().subscribe((res: RegisterModel) => {
      this.store.dispatch(
        userAuthentication({ isLoggedIn: true, profile: { ...res, _id: '' } })
      );
    });
    this.isUserLoggedIn$ = this.store.select(userLoginStatus);
    this.user$ = this.store.select(selectUserProfile);
    this.store.dispatch(loadCartItems());
  }
  activePage = '';

  ngOnInit() {
    this.activePage = this.route.url.replace('/', '');
    this.route.events.subscribe((url) => {
      if (url instanceof NavigationEnd) {
        this.activePage = url.url.replace('/', '');
      } else {
        console.log(url);
      }
    });
  }
}
