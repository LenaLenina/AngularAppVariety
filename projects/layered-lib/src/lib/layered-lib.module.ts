import { NgModule } from '@angular/core';
import { IConditionToNotify } from './core/services.abstractions/i-condition-to-notify-service';
import { ConditionToNotifyPriceMore700 } from './core/services/condition-to-notify-price-more-700.service';
import { IProductsRepository } from './core/domain/repositories/i-products-repository';
import { ProductsRepository } from './infrastracture/persistence/repositories/products-repository';
import { BrowserModule } from '@angular/platform-browser';
import { ProductListComponent } from './infrastracture/presentation/product-list-component/product-list.component';
import { ProductAlertsComponent } from './infrastracture/presentation/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './infrastracture/presentation/product-details/product-details.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  exports: [
    ProductListComponent,
    ProductDetailsComponent,
  ],
  providers: [
    { provide: IConditionToNotify, useClass: ConditionToNotifyPriceMore700 },
    { provide: IProductsRepository, useClass: ProductsRepository },
  ]
})
export class LayeredLibModule { }
