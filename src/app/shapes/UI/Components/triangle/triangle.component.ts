import { Component } from '@angular/core';
import { IShape } from '../../Components.Abstractions/IShape';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss']
})
export class TriangleComponent implements IShape {

  public Display(): void {
    console.log("triangle");
  }

}
