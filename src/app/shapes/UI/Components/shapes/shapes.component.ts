import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { IShape } from '../../Components.Abstractions/IShape';
import { SquareComponent } from '../square/square.component';


@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.scss'],
})
export class ShapesComponent implements AfterViewInit {

  @ViewChildren('shape') public shapes!: QueryList<IShape>;
  // @ViewChildren(IShape) public shapes!: QueryList<IShape>; так не работает
  // @ViewChildren(IShape) public shapes2!: QueryList<IShape>; так тоже не работает для triangle и polygon, хотя они implents(extends) IShape
  @ViewChildren(IShape) public shapes3!: QueryList<IShape>; // нужно добавлять providers: [{ provide: IShape, useExisting: CircleComponent }] в компоненте тогда работает
  @ViewChildren(SquareComponent) public squares!: QueryList<SquareComponent>;
 

  arr = [1, 2, 3];

  ngAfterViewInit() {
    console.log(this.shapes.length);
    this.shapes.forEach(x => x.Display());

    console.log(this.squares.length); // 4
    this.squares.forEach((x: IShape) => x.Display());

    console.log(this.shapes3.length);
    this.shapes3.forEach(x => x.Display());
  }
}
