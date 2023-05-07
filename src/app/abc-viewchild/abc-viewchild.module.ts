import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from './UI/Components/a/a.component';
import { BComponent } from './UI/Components/b/b.component';
import { CComponent } from './UI/Components/c/c.component';
import { AbcComponent } from './UI/Components/abc/abc.component';
import { A2Component } from './UI/Components/a2/a2.component';


@NgModule({
  declarations: [
    AComponent,
    BComponent,
    CComponent,
    AbcComponent,
    A2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [AbcComponent]
})
export class AbcViewchildModule { }
