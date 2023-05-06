import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsRepository } from './ProductsModule/Infrastracture/Persistence/Repositories/products-repository';
import { INumberEqualService } from './NumberEqualModule/ApplicationCore/Services.Abstractions/INumberEqualService';
import { INumberBeetween3And5 } from "./NumberEqualModule/ApplicationCore/Services.Abstractions/INumberBeetween3And5";
import { NumberEqualService } from './NumberEqualModule/ApplicationCore/Services/number-equal.service';
import { IDistinctArrayService } from './ArrayExtensions/Services.Abstractions/IDistinctService';
import { DistinctArrayService } from './ArrayExtensions/Services/distinct-array.service';
import { INumberIsEven } from './NumberEqualModule/ApplicationCore/Services.Abstractions/INumberIsEven';
import { INumberIsOdd } from './NumberEqualModule/ApplicationCore/Services.Abstractions/INumberIsOdd';
import { NumberIsEven } from './NumberEqualModule/ApplicationCore/Services/NumberIsEven';
import { NumberIsOdd } from './NumberEqualModule/ApplicationCore/Services/NumberIsOdd';
import { NumberBeetween3And5 } from './NumberEqualModule/ApplicationCore/Services/NumberBeetween3And5';
import { IProductsRepository } from './ProductsModule/ApplicationCore/Domain/Repositories/IProductsRepository';
import { ICounter } from './CounterModule/ApplicationCore/Services.Abstractions/ICounter';
import { NumberCounterService } from './CounterModule/ApplicationCore/Services/number-counter.service';
import { INumberRepository } from './NumberModule/ApplicationCore/Domain/Repositories/INumberRepository';
import { NumberRepository } from './NumberModule/Infrastracture/Persistence/number-repository';
import { ProductListComponent } from './ProductsModule/UI/Components/product-list-component/product-list.component';
import { NumberComponent } from './NumberModule/UI/Components/number/number.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: 
  [
    {provide: IProductsRepository, useClass: ProductsRepository },

    {provide: IDistinctArrayService, useClass: DistinctArrayService },

    {provide: ICounter, useClass: NumberCounterService },
    
    {provide: INumberEqualService, useClass: NumberEqualService },
    {provide: INumberIsEven, useClass: NumberIsEven },
    {provide: INumberIsOdd, useClass: NumberIsOdd },
    {provide: INumberBeetween3And5, useClass: NumberBeetween3And5 },

    {provide: INumberRepository, useClass: NumberRepository }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
