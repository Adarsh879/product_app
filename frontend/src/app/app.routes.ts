import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { SignupComponent } from './features/signup/signup.component';
import { HomeComponent } from './features/home/home.component';
import { ProductsComponent } from './features/products/products.component';
import { AuthGard } from './service/auth-gard';
import { CheckoutComponent } from './features/products/checkout/checkout.component';
import { BuyComponent } from './features/products/buy/buy.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'signup', component: SignupComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'products', component: ProductsComponent,
    },
    
    {
        path: 'details/:id', component: CheckoutComponent,
      },
      {
        path: 'details/:id/checkout', component: BuyComponent, canActivate: [AuthGard]
      }, 
    {
        path: '**', redirectTo: '/home'
    },
];
