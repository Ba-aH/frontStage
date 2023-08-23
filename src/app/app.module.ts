import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ContentComponent } from './component/content/content.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { IndeComponent } from './component/inde/inde.component';
import { CartComponent } from './component/cart/cart.component';
import { SaleComponent } from './component/sale/sale.component';
import { ProductMComponent } from './component/product-m/product-m.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    LoginComponent,
    ProfileComponent,
    SignUpComponent,
    IndeComponent,
    CartComponent,
    SaleComponent,
    ProductMComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule ,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
