import { NgModule } from '@angular/core';
import { ProductListComponent } from './infrastracture/presentation/product-list-component/product-list.component';
import { ProductAlertsComponent } from './infrastracture/presentation/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './infrastracture/presentation/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ProductListComponent,
    ProductDetailsComponent,
  ]
})
export class LayeredLibModule { }
