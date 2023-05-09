import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list/ui/components/product-list-component/product-list.component';
import { IProductsRepository } from './product-list/application-core/domain/repositories/IProductsRepository';
import { ProductsRepository } from './product-list/infrastracture/persistence/repositories/ProductsRepository';
import { ICanNotify } from './product-alerts/application-core/services.abstractions/ICanNotify';
import { CanNotifyIfPriceMore700 } from './product-alerts/application-core/services/CanNotifyIfPriceMore700';
import { ProductAlertsComponent } from './product-alerts/ui/components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/ui/components/product-details/product-details.component';
import { IProductController } from './product-list/presentation/controllers.abstract/IProductController';
import { ProductController } from './product-list/presentation/controllers/ProductController';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    ProductListComponent
  ],
  providers: [
    { provide: IProductsRepository, useClass: ProductsRepository },
    { provide: ICanNotify, useClass: CanNotifyIfPriceMore700 },
    { provide: IProductController, useClass: ProductController }
  ]
})
export class ProductsModule { }
