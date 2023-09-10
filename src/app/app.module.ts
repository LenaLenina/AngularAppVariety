import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { INumberEqualService } from './NumberEqualModule/ApplicationCore/Services.Abstractions/INumberEqualService';
import { NumberEqualService } from './NumberEqualModule/ApplicationCore/Services/number-equal.service';
import { IDistinctArrayService } from './ArrayExtensions/Services.Abstractions/IDistinctService';
import { DistinctArrayService } from './ArrayExtensions/Services/distinct-array.service';
import { NumberIsEven } from './NumberEqualModule/ApplicationCore/Services/NumberIsEven';
import { NumberIsOdd } from './NumberEqualModule/ApplicationCore/Services/NumberIsOdd';
import { NumberBeetween3And5 } from './NumberEqualModule/ApplicationCore/Services/NumberBeetween3And5';
import { ICounter } from './CounterModule/ApplicationCore/Services.Abstractions/ICounter';
import { NumberCounterService } from './CounterModule/ApplicationCore/Services/number-counter.service';
import { INumberRepository } from './NumberModule/ApplicationCore/Domain/Repositories/INumberRepository';
import { NumberRepository } from './NumberModule/Infrastracture/Persistence/number-repository';
import { NumberComponent } from './NumberModule/UI/Components/number/number.component';
import { NUMBER_EQUAL_CONDITIONS } from './InjectionTokens/NUMBER_EQUAL_CONDITIONS';


@NgModule({
  declarations: [
    AppComponent,
    NumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: 
  [
    {provide: IDistinctArrayService, useClass: DistinctArrayService },

    {provide: ICounter, useClass: NumberCounterService },
    
    {provide: INumberEqualService, useClass: NumberEqualService },

    { provide: NUMBER_EQUAL_CONDITIONS, useValue: [
      new NumberBeetween3And5(),
      // new NumberIsEven(),
      new NumberIsOdd(),
    ]},

    {provide: INumberRepository, useClass: NumberRepository }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
