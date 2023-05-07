import { Component } from '@angular/core';
import { IC } from '../../Components.Abstractions/IC';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss']
})
export class CComponent extends IC {

  public funC(): void {
    console.log("CComponent funC()");
  }
}
