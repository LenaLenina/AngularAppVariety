import { Component } from '@angular/core';
import { IShape } from '../../Components.Abstractions/IShape';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements IShape {

  public Display(): void {
    console.log("square");
  }

}
