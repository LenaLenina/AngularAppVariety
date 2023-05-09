import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IShoppingCartController } from './Presentation/controllers.abstractions/IShoppingCartController';
import { ShoppingCartController } from './Presentation/controllers/ShoppingCartController';
import { ShoppingCartComponent } from './ui/components/shopping-cart/shopping-cart.component';
import { ProductBuyComponent } from './ui/components/product-buy/product-buy.component';
import { IProductBuyService } from './application-core/services.abstractions/IProductBuyService';
import { ShoppingCartProdcutBuyService } from './application-core/services/ShoppingCartProdcutBuyService';
import { ViewShoppingCartService } from './application-core/services/ViewShoppingCartService';
import { IViewShoppingCartService } from "./application-core/services.abstractions/IViewShoppingCartService";
import { ShoppingCartRepository } from './Infrastracture/persistence/repositories/ShoppingCartRepository';
import { IShoppingCartRepository } from './application-core/domain/repositories/IShoppingCartRepository';
import { RepositoryShoppingCartService } from './application-core/services/RepositoryShoppingCartService';
import { IRepositoryShoppingCartService } from "./application-core/services.abstractions/IRepositoryShoppingCartService";
import { ShoppingCartController2 } from './Presentation/controllers/ShoppingCartController2';
import { ShoppingCartController3 } from './Presentation/controllers/ShoppingCartController3';


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
    { provide: IViewShoppingCartService, useClass: ViewShoppingCartService },
    { provide: IShoppingCartController, useClass: ShoppingCartController2 },
    { provide: IShoppingCartRepository, useClass: ShoppingCartRepository },
    { provide: IRepositoryShoppingCartService, useClass: RepositoryShoppingCartService }
  ]
})
export class ComponentInteractThroughServiceModule { }
