import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { CartComponent } from './pages/cart/cart.component';
import { ShopDetailsComponent } from './pages/shop-details/shop-details.component';
import { AddProductPage } from './pages/admin/products/add-product/add-product.component';
import { AdminLayout } from './components/layout/admin/admin.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'shop',
        component: ShopComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'thankyou',
        component: ThankyouComponent,
      },
      {
        path: 'contact-us',
        component: ContactComponent,
      },
      {
        path: '',
        canActivate: [authGuard],
        children: [
          {
            path: 'checkout',
            component: CheckoutComponent,
          },
          {
            path: 'cart',
            component: CartComponent,
          },
        ],
      },
      {
        path: 'product-details',
        component: ShopDetailsComponent,
      },
    ],
  },
  {
    path: 'admin',
    component: AdminLayout,
    children: [
      { path: '', redirectTo: 'add-products', pathMatch: 'full' }, // Redirect to add-products directly
      {
        path: 'add-products',
        component: AddProductPage,
      },
    ],
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
];
