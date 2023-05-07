import { Component, QueryList, ViewChildren } from '@angular/core';
import { IShape } from '../../Components.Abstractions/IShape';


@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.scss'],
})
export class ShapesComponent {

  @ViewChildren('shape') public shapes!: QueryList<IShape>;

  ngAfterViewInit() {
    console.log(this.shapes.length);
    this.shapes.forEach(x => x.Display());
  }
}
