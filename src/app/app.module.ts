import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ShapesModule } from './shapes/shapes.module';
import { AbcViewchildModule } from './abc-viewchild/abc-viewchild.module';

import { AppComponent } from './app.component';
import { INumberEqualService } from './NumberEqualModule/ApplicationCore/Services.Abstractions/INumberEqualService';
import { INumberBeetween3And5 } from "./NumberEqualModule/ApplicationCore/Services.Abstractions/EqualConditions/INumberBeetween3And5";
import { NumberEqualService } from './NumberEqualModule/ApplicationCore/Services/number-equal.service';
import { IDistinctArrayService } from './ArrayExtensions/Services.Abstractions/IDistinctService';
import { DistinctArrayService } from './ArrayExtensions/Services/distinct-array.service';
import { INumberIsEven } from './NumberEqualModule/ApplicationCore/Services.Abstractions/EqualConditions/INumberIsEven';
import { INumberIsOdd } from './NumberEqualModule/ApplicationCore/Services.Abstractions/EqualConditions/INumberIsOdd';
import { NumberIsEven } from './NumberEqualModule/ApplicationCore/Services/NumberIsEven';
import { NumberIsOdd } from './NumberEqualModule/ApplicationCore/Services/NumberIsOdd';
import { NumberBeetween3And5 } from './NumberEqualModule/ApplicationCore/Services/NumberBeetween3And5';
import { ICounter } from './CounterModule/ApplicationCore/Services.Abstractions/ICounter';
import { NumberCounterService } from './CounterModule/ApplicationCore/Services/number-counter.service';
import { INumberRepository } from './NumberModule/ApplicationCore/Domain/Repositories/INumberRepository';
import { NumberRepository } from './NumberModule/Infrastracture/Persistence/number-repository';
import { NumberComponent } from './NumberModule/UI/Components/number/number.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LayeredLibModule } from 'LayeredLib';


@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShapesModule,
    AbcViewchildModule,
    LayeredLibModule
  ],
  providers: 
  [
    {provide: IDistinctArrayService, useClass: DistinctArrayService },

    {provide: ICounter, useClass: NumberCounterService },
    
    {provide: INumberEqualService, useClass: NumberEqualService },
    {provide: INumberIsEven, useClass: NumberIsEven },
    {provide: INumberIsOdd, useClass: NumberIsOdd },
    {provide: INumberBeetween3And5, useClass: NumberBeetween3And5 },

    {provide: INumberRepository, useClass: NumberRepository },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
