import { Component } from '@angular/core';
import { IShape } from '../../Components.Abstractions/IShape';

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.scss'],
  providers: [{ provide: IShape, useExisting: PolygonComponent }]
})
export class PolygonComponent implements IShape {

  public Display(): void {
    console.log("polygon");
  }
  
}
