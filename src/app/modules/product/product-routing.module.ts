import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent, ProductDetailsComponent } from 'LayeredLib';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
