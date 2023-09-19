import { Component } from '@angular/core';
import { IShape } from '../../Components.Abstractions/IShape';

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.scss']
})
export class PolygonComponent implements IShape {

  public Display(): void {
    console.log("polygon");
  }
  
}
