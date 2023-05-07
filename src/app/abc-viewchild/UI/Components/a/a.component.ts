import { Component } from '@angular/core';
import { IA } from '../../Components.Abstractions/IA';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent extends IA {

  public funA(): void {
    console.log("AComponent funA()");
  }
}
