import { Component } from '@angular/core';

@Component({
  selector: 'tabs-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  readonly tabs = [
    'John Cleese',
    'Terry Gilliam',
    'Eric Idle',
    'Michael Palin',
    'Graham Chapman',
    'Terry Jones',
  ]

  selected = '';

  onSelected(selected: string) {
    this.selected = selected;
  }
}
