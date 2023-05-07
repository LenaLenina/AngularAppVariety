import { Component } from '@angular/core';
import { IB } from '../../Components.Abstractions/IB';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent extends IB {

  public funB(): void {
    console.log("BComponent funB()");
  }
}
