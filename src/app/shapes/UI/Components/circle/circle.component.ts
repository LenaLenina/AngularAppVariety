import { Component } from '@angular/core';
import { ICircle } from '../../Components.Abstractions/ICircle';
import { IShape } from '../../Components.Abstractions/IShape';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
  providers: [{ provide: IShape, useExisting: CircleComponent }]
})
export class CircleComponent implements ICircle {

  public Display(): void {
    console.log("circle");
  }
  
}
