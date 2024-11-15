import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCartState } from '../../state/cart/cart.selector';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  cartCount$ = Observable<number>;

  constructor(private store: Store<{}>) {
    this.cartCount$ = this.store.dispatch(selectCartState());
  }
}
