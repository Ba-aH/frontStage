import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { IndeComponent } from './component/inde/inde.component';
import { CartComponent } from './component/cart/cart.component';
import { SaleComponent } from './component/sale/sale.component';
const routes: Routes = [
  {
    path:"", component: IndeComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'profile', component: ProfileComponent
  },
  {
    path:'sign-up', component: SignUpComponent
  },
  {
    path:'cart', component: CartComponent
  },
  {
    path:'sale', component: SaleComponent
  },
  {
    path:'products', component: IndeComponent
  }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})

export class AppRoutingModule { }
