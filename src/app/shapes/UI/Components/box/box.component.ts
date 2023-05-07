import { Component } from '@angular/core';
import { IBox } from '../../Components.Abstractions/IBox';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements IBox {

  public Display(): void {
    console.log("box");
  }

}
