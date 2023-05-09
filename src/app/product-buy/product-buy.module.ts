import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBuyComponent } from './ui/components/product-buy/product-buy.component';
import { IProductBuyService } from './application-core/services.abstractions/IProductBuyService';
import { ShoppingCartProdcutBuyService } from './application-core/services/ShoppingCartProdcutBuyService';
import { ShoppingCartModule } from '../shopping-cart/shopping-cart.module';


@NgModule({
  declarations: [
    ProductBuyComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartModule
  ],
  exports: [ ProductBuyComponent, ShoppingCartModule ],
  providers: [
    { provide: IProductBuyService, useClass: ShoppingCartProdcutBuyService },
  ]
})
export class ProductBuyModule { }
