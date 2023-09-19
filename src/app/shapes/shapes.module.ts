import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from './UI/Components/box/box.component';
import { CircleComponent } from './UI/Components/circle/circle.component';
import { ShapesComponent } from './UI/Components/shapes/shapes.component';
import { TriangleComponent } from './UI/Components/triangle/triangle.component';
import { PolygonComponent } from './UI/Components/polygon/polygon.component';
import { SquareComponent } from './UI/Components/square/square.component';


@NgModule({
  declarations: [
    BoxComponent,
    CircleComponent,
    ShapesComponent,
    TriangleComponent,
    PolygonComponent,
    SquareComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ ShapesComponent ]
})
export class ShapesModule { }
