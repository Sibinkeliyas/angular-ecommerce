import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCartCount } from '../../state/cart/cart.selector';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  cartCount$: Observable<number>; 

  constructor(private store: Store<AppState>) {
    this.cartCount$ = this.store.select(selectCartCount);
  }
}
