import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { ProductBuyModule } from './product-buy/product-buy.module';
import { ProductsModule } from './products/products.module';
import { ContentChildrenByServiceModule } from './content-children-by-service/content-children-by-service.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductBuyModule,
    ShoppingCartModule,
    ProductsModule,
    ContentChildrenByServiceModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
