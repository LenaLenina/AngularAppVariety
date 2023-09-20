import { NgModule } from '@angular/core';
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
  ]
})
export class LayeredLibModule { }
