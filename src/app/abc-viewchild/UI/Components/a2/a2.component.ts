import { Component } from '@angular/core';
import { IA } from '../../Components.Abstractions/IA';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.scss']
})
export class A2Component extends IA{
  public funA(): void {
    console.log("A2 funA()");
  }
}
