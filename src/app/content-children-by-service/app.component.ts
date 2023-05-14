import { Component } from '@angular/core';

@Component({
  selector: 'app-content-children-by-service',
  template: `
   <app-animals>
    <cat></cat>
    <dog></dog>
    <rock></rock>
    <fox></fox>
    <cat></cat>
    <p>just an element</p>
   </app-animals>    
  `,
  styles: []
})
export class AppComponent { }
