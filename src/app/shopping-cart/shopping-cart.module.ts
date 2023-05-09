import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './ui/components/shopping-cart/shopping-cart.component';
import { IShoppingCartController } from './presentation/controllers.abstract/IShoppingCartController';
import { ShoppingCartController2 } from './presentation/controllers/ShoppingCartController2';
import { IViewShoppingCartService } from './application-core/services.abstractions/IViewShoppingCartService';
import { ViewShoppingCartService } from './application-core/services/ViewShoppingCartService';
import { IRepositoryShoppingCartService } from './application-core/services.abstractions/IRepositoryShoppingCartService';
import { RepositoryShoppingCartService } from './application-core/services/RepositoryShoppingCartService';
import { IShoppingCartRepository } from './application-core/domain/repositories/IShoppingCartRepository';
import { ShoppingCartRepository } from './infrastracture/persistence/repositories/ShoppingCartRepository';


@NgModule({
  declarations: [
    ShoppingCartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ ShoppingCartComponent ],
  providers: [
    { provide: IShoppingCartController, useClass: ShoppingCartController2 },

    { provide: IViewShoppingCartService, useClass: ViewShoppingCartService },
    { provide: IRepositoryShoppingCartService, useClass: RepositoryShoppingCartService },

    { provide: IShoppingCartRepository, useClass: ShoppingCartRepository }
  ]
})
export class ShoppingCartModule { }
