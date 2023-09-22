import { Component } from '@angular/core';
import { IBox } from '../../Components.Abstractions/IBox';
import { IShape } from '../../Components.Abstractions/IShape';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  providers: [{ provide: IShape, useExisting: BoxComponent }]
})
export class BoxComponent implements IBox {

  public Display(): void {
    console.log("box");
  }

}
