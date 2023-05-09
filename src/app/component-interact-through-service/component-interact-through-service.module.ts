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
    { provide: IShoppingCartController, useClass: ShoppingCartController },
    { provide: IShoppingCartRepository, useClass: ShoppingCartRepository },
    { provide: IRepositoryShoppingCartService, useClass: RepositoryShoppingCartService }
  ]
})
export class ComponentInteractThroughServiceModule { }
