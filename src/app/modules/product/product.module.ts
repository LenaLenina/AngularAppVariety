import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { 
  ConditionToNotifyPriceMore500,
  ConditionToNotifyPriceMore700,
  IConditionToNotify,
  IProductsRepository,
  LayeredLibModule, 
  ProductsRepository
 } from 'LayeredLib';


@NgModule({
  declarations: [],
  imports: [
    ProductRoutingModule,
    LayeredLibModule
  ],
  providers: [
    { provide: IConditionToNotify, useClass: ConditionToNotifyPriceMore500 },
    { provide: IProductsRepository, useClass: ProductsRepository },
  ]
})
export class ProductModule { }
