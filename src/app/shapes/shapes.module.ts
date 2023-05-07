import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './UI/Components/box/box.component';
import { CircleComponent } from './UI/Components/circle/circle.component';
import { ShapesComponent } from './UI/Components/shapes/shapes.component';


@NgModule({
  declarations: [
    BoxComponent,
    CircleComponent,
    ShapesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ ShapesComponent ]
})
export class ShapesModule { }
