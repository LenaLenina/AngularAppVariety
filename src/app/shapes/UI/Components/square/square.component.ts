import { Component } from '@angular/core';
import { IShape } from '../../Components.Abstractions/IShape';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
  providers: [{ provide: IShape, useExisting: SquareComponent }]
})
export class SquareComponent implements IShape {

  public Display(): void {
    console.log("square");
  }

}
