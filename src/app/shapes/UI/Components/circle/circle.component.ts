import { Component } from '@angular/core';
import { ICircle } from '../../Components.Abstractions/ICircle';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
})
export class CircleComponent implements ICircle {

  public Display(): void {
    console.log("circle");
  }
  
}
