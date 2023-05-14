import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { RockComponent } from './rock/rock.component';
import { FoxComponent } from './fox/fox.component';
import { AnimalsComponent } from './animals/animals.component';
import { LinkDirective } from './link.directive';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    DogComponent,
    RockComponent,
    FoxComponent,
    AnimalsComponent,
    LinkDirective
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    AppComponent
  ],
})
export class ContentChildrenByServiceModule { }
