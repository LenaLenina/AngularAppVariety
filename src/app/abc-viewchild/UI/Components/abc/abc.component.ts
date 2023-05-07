import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IA } from '../../Components.Abstractions/IA';
import { IB } from '../../Components.Abstractions/IB';
import { IC } from '../../Components.Abstractions/IC';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.scss']
})
export class AbcComponent implements AfterViewInit {
  @ViewChild('a', {static: false}) a!: IA;
  @ViewChild('b', {static: false}) b!: IB;
  @ViewChild('c', {static: false}) c!: IC;

  ngAfterViewInit() {

    this.a.bComponent = this.b;
    this.a.cComponent = this.c;

    this.b.aComponent = this.a;
    this.b.cComponent = this.c;

    this.c.aComponent = this.a;
    this.c.bComponent = this.b;

    this.a.funA();
    this.b.funB();
    this.c.funC();

    this.a.callB();
    this.a.callC();

    this.b.callA();
    this.b.callC();

    this.c.callA();
    this.c.callB();
  }
}
