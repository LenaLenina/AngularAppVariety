import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductListComponent } from './infrastracture/presentation/product-list-component/product-list.component';
import { ProductAlertsComponent } from './infrastracture/presentation/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './infrastracture/presentation/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { MyPipePipe } from './infrastracture/presentation/my-pipe.pipe';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    MyPipePipe,
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
