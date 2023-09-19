import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

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
