import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IShoppingCartController } from './ui/controllers.abstractions/ishopping-cart-controller';
import { ShoppingCartController } from './ui/controllers/shopping-cart-controller ';
import { ShoppingCartComponent } from './ui/components/shopping-cart/shopping-cart.component';
import { ProductBuyComponent } from './ui/components/product-buy/product-buy.component';
import { IProductBuyService } from './application-core/services.abstractions/i-poduct-buy-service';
import { ShoppingCartProdcutBuyService } from './application-core/services/product-buy.service';
import { ShoppingCartService } from './application-core/services/shopping-cart.service';
import { IShoppingCartService } from './application-core/services.abstractions/i-shopping-cart-service';


@NgModule({
  declarations: [
    ProductBuyComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ ProductBuyComponent, ShoppingCartComponent ],
  providers: [
    { provide: IProductBuyService, useClass: ShoppingCartProdcutBuyService },
    { provide: IShoppingCartService, useClass: ShoppingCartService },
    { provide: IShoppingCartController, useClass: ShoppingCartController }
  ]
})
export class ComponentInteractThroughServiceModule { }
