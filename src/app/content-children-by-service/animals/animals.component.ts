import { Component, ContentChildren, QueryList } from '@angular/core';
import { Animal } from '../animal';


@Component({
  selector: 'app-animals',
  template: `
    <ng-content></ng-content>

    <button (click)="say()">Say!</button>
  `
})
export class AnimalsComponent {

  @ContentChildren(Animal) animals: QueryList<Animal> | undefined

  say() {
    this.animals?.forEach(animal => console.log(animal));
    this.animals?.forEach(animal => animal.say());
  }
}
