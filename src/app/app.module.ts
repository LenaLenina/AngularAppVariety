import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ProductModule } from './modules/product/product.module';
import { RouterModule } from '@angular/router';
import { RoutingTestsModule } from './modules/routing-tests/routing-tests.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ProductModule,
    RoutingTestsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
